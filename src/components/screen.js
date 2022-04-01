import {
    StyleSheet,
    SafeAreaView,
    View,
    Platform,
    StatusBar,
} from 'react-native'
import React from 'react'

const Screen = ({ children, style }) => {
    return (
        <SafeAreaView style={[styles.screen, style]}>
            <View style={style}>{children}</View>
        </SafeAreaView>
    )
}

export default Screen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: Platform.OS === 'android' && StatusBar.currentHeight,
    },
})
