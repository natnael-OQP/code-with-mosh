import { StyleSheet, Image, Text, ImageBackground, View } from 'react-native'
import React from 'react'
import ButtonComponent from '../components/Button'

const WelcomeScreen = () => {
    return (
        <ImageBackground
            style={styles.background}
            source={require('../assets/background.jpg')}
        >
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require('../assets/logo-red.png')}
                />
                <Text>Sell What You Don't Need</Text>
            </View>
            <View style={styles.buttonContainer}>
                <ButtonComponent title="login" />
                <ButtonComponent title="register" color="secondary" />
            </View>
        </ImageBackground>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center',
    },
    logo: {
        marginVertical: 10,
        width: 100,
        height: 100,
    },
    buttonContainer: {
        width: '100%',
        paddingHorizontal: 10,
    },
})
