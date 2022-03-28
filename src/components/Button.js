import { StyleSheet, Platform, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import colors from '../config/colors'

const ButtonComponent = ({ title, color = 'primary', onPress }) => {
    return (
        <TouchableOpacity
            style={[styles.container, { backgroundColor: colors[color] }]}
            onPress={onPress}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

export default ButtonComponent

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        width: '100%',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        marginVertical: 10,
    },
    text: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
        textTransform: 'capitalize',

        // fontFamily:Platform.OS === 'android' ? 'Roboto' : ''
    },
})
