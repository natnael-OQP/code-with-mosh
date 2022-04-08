// react navigation
import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from './src/navigation/AppNavigator'

import AuthNavigator from './src/navigation/AuthNavigator'
import navigationThemes from './src/navigation/navigationThemes'

export default function App() {
    return (
        <NavigationContainer theme={navigationThemes}>
            <AppNavigator />
        </NavigationContainer>
    )
}
