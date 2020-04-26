import React, { Component } from 'react'
import { View, ScrollView , StyleSheet} from 'react-native'
import { connect } from 'react-redux'
import FetchCoinData from './../Actions/FetchCoinData';

import Spinner from 'react-native-loading-spinner-overlay';

import CoinCard from './CoinCard';

class CryptoContainer extends Component {

    componentDidMount(){
        this.props.FetchCoinData();
    }

    renderCoinCards() {
        const { crypto } = this.props;
        return crypto.data.map((coin, index) =>
        <CoinCard
            key = {index}
            coin_name = {coin.name}
            symbol = {coin.symbol}
            price_usd = {coin.quote.USD.price}
            percent_change_24h = {coin.quote.USD.percent_change_24h}
            percent_change_7d = {coin.quote.USD.percent_change_7d}
        /> 
        )
    }

    render() {
        const { crypto } = this.props;

        if (crypto.isFetching) {
            return(
                <View>
                    <Spinner
                    visible = {crypto.isFetching}
                    textContent = {"Loading..."}
                    textStyle = {{color: '#253145'}}
                    animation = "fade"
                    color = 'white'
                    />
                </View>
            )
        }

        return (
            <ScrollView contentContainerStyle={styles.contentContainer}>
                {this.renderCoinCards()}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    contentContainer: {
        paddingBottom: 100,
        paddingTop: 55
    }
});

function mapStateToProps(state) {
    return{
        crypto: state.crypto
       }
}
export default connect(mapStateToProps, { FetchCoinData })(CryptoContainer) 