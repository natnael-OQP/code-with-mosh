// react navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors'
import AccountScreen from '../screens/AccountScreen'
import ListingScreen from '../screens/ListingScreen'
import ListingEditScreen from '../screens/ListingEditScreen'

export default function AppNavigator() {
    const Tab = createBottomTabNavigator()
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: colors.primary,
            }}
        >
            <Tab.Screen
                name="Listing"
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="home"
                            color={color}
                            size={size}
                        />
                    ),
                }}
                component={ListingScreen}
            />
            <Tab.Screen
                name="ListingEdit"
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="home"
                            color={color}
                            size={size}
                        />
                    ),
                }}
                component={ListingEditScreen}
            />
            <Tab.Screen
                name="Account"
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="home"
                            color={color}
                            size={size}
                        />
                    ),
                }}
                component={AccountScreen}
            />
        </Tab.Navigator>
    )
}
