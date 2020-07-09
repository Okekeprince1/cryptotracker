import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header = () => {
    return (
        <View style = {headerContainer}>
            <Text style = {header}>
                Cryptocurrency Tracker
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    headerContainer: {
        display: "flex",
        alignItems: "center",
        marginTop: 20
    },

    header: {
        fontWeight: "bold",
        fontSize: 25,
    },
})

const { headerContainer, header } = styles;
export default Header;