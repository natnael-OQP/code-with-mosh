import { useState } from 'react'
import { StyleSheet, Switch, View } from 'react-native'

import AppTextInput from '../components/AppTextInput'
import Screen from '../components/screen'

const RegisterScreen = () => {
    const [value, setValue] = useState(false)
    return (
        <Screen style={styles.container}>
            <AppTextInput name="email" size={20} placeholder="username" />
            <Switch value={value} onValueChange={(value) => setValue(value)} />
        </Screen>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        padding: 6,
    },
})
