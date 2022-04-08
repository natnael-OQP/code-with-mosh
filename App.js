// react navigation
import { NavigationContainer } from '@react-navigation/native'

import AuthNavigator from './src/navigation/AuthNavigator'
import navigationThemes from './src/navigation/navigationThemes'

export default function App() {
    return (
        <NavigationContainer theme={navigationThemes}>
            <AuthNavigator />
        </NavigationContainer>
    )
}
