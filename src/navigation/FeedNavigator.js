// react navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import ListingScreen from '../screens/ListingScreen'
import ListingDetailsScreen from '../screens/ListingDetailsScreen'

export default function FeedNavigator() {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator
            presentation="modal"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="Listing" component={ListingScreen} />
            <Stack.Screen
                name="ListingDetails"
                component={ListingDetailsScreen}
            />
        </Stack.Navigator>
    )
}
