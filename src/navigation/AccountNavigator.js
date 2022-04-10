// react navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import MessagesScreen from '../screens/MessagesScreen'
import AccountScreen from '../screens/AccountScreen'

export default function AccountNavigator() {
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Account"
                component={AccountScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Messages"
                component={MessagesScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}
