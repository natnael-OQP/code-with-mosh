// react navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors'
import AccountScreen from '../screens/AccountScreen'
import ListingEditScreen from '../screens/ListingEditScreen'
import FeedNavigator from './FeedNavigator'

export default function AppNavigator() {
    const Tab = createBottomTabNavigator()
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: colors.primary,
            }}
        >
            <Tab.Screen
                name="Feed"
                options={{
                    headerShown: false,
                    tabBarLabel: 'Listing',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="plus"
                            color={color}
                            size={size}
                        />
                    ),
                }}
                component={FeedNavigator}
            />
            <Tab.Screen
                name="ListingEdit"
                options={{
                    tabBarLabel: 'ListingEdit',
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
                    tabBarLabel: 'Account',
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
