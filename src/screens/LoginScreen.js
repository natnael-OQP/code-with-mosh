import { useState } from 'react'
import { StyleSheet, Image, View } from 'react-native'

import AppButton from '../components/AppButton'
import AppTextInput from '../components/AppTextInput'
import Screen from '../components/Screen'

const LoginScreen = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    return (
        <Screen style={styles.container}>
            <Image
                style={styles.image}
                source={require('../assets/logo-red.png')}
            />
            <AppTextInput
                name="email"
                size={20}
                placeholder="Email"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                textContentType="emailAddress"
                autoComplete="name"
                onChangeText={(text) => setEmail(text)}
            />
            <AppTextInput
                name="look"
                size={20}
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect={false}
                autoComplete="password"
                textContentType="password"
                secureTextEntry
                onChangeText={(password) => setPassword(password)}
            />
            <AppButton title="Login" onPress={() => console.log('login')} />
        </Screen>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    image: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20,
    },
})
