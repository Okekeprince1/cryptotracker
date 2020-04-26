import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableHighlight } from 'react-native';
import { images } from './../Utils/CoinIcons';



const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        padding: 10
    },
    text: {
        fontFamily: "Roboto" ,
        fontSize: 20
    },
    image: {
        width: 60,
        height: 60,
        marginRight: 20
    },
    bold: {
        fontWeight: 'bold'
    }
});

const { container, image, bold, text } = styles;


const CoinCard = ({ symbol, coin_name, price_usd, percent_change_24h, percent_change_7d}) => {
    return (
        <View style={container}>
            <View style={{flexGrow:2}}>
                <Image style = {image} source = {{ uri: images[symbol] }} />
            </View>
            <View style={{flexGrow:10}}>
                <View style={{ display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                    <Text style={text}>{coin_name}</Text>
                    <Text>{symbol}</Text>
                </View>
                <Text><Text style = {bold}>$</Text>{price_usd} </Text>
                <Text>Change past 24 hours: {percent_change_24h}</Text>
                <Text>Change past 7 days: {percent_change_7d}</Text>
            </View>
        </View>
    )
}

export default CoinCard;