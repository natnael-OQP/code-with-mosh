// react navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import ListingScreen from '../screens/ListingScreen'
import ListingDetailsScreen from '../screens/ListingDetailsScreen'

export default function FeedNavigator() {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator mode="modal">
            <Stack.Screen
                name="Listing"
                component={ListingScreen}
                // options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ListingDetails"
                component={ListingDetailsScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}
