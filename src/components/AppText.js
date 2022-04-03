import React from 'react'
import { Text, StyleSheet, Platform } from 'react-native'
import colors from '../config/colors'

function AppText({ children, style, ...other }) {
    return (
        <Text {...other} style={[styles.text, style, { ...other }]}>
            {children}
        </Text>
    )
}

const styles = StyleSheet.create({
    text: {
        marginLeft: 7,
        color: colors.medium,
        fontSize: 18,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    },
})

export default AppText
