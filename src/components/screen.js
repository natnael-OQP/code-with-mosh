import {
    StyleSheet,
    SafeAreaView,
    View,
    Platform,
    StatusBar,
} from 'react-native'
import React from 'react'

const Screen = ({ children }) => {
    return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>
}

export default Screen

const styles = StyleSheet.create({
    screen: {
        paddingTop: Platform.OS === 'android' && StatusBar.currentHeight,
    },
})
