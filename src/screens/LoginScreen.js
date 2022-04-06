import { StyleSheet, Image } from 'react-native'

// components
import Screen from '../components/screen'
import AppFormInput from '../components/forms/AppFormInput'
import AppFormButton from '../components/forms/AppFormButton'
import AppForm from '../components/forms/AppForm'

import * as yup from 'yup'

const validationSchema = yup.object().shape({
    email: yup.string().email().required().label('Email'),
    password: yup.string().min(6).required().label('Password'),
})

const LoginScreen = () => {
    return (
        <Screen style={styles.container}>
            <Image
                style={styles.image}
                source={require('../assets/logo-red.png')}
            />
            <AppForm
                initialValues={{ email: '', password: '' }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormInput
                    icon="email"
                    name="email"
                    size={20}
                    placeholder="Email"
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    autoComplete="name"
                />
                <AppFormInput
                    icon="lock"
                    name="password"
                    size={20}
                    placeholder="Password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    autoComplete="password"
                    textContentType="password"
                    secureTextEntry
                />
                <AppFormButton title="Login" />
            </AppForm>
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
