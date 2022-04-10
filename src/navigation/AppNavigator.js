// react navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors'
import ListingEditScreen from '../screens/ListingEditScreen'
import FeedNavigator from './FeedNavigator'
import AccountNavigator from './AccountNavigator'
import NewListingButton from './NewListingButton'

export default function AppNavigator() {
    const Tab = createBottomTabNavigator()
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: colors.primary,
                headerShown: false,
            }}
        >
            <Tab.Screen
                name="Feed"
                options={{
                    // tabBarLabel: 'Listing',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="home"
                            color={color}
                            size={size}
                        />
                    ),
                }}
                component={FeedNavigator}
            />
            <Tab.Screen
                name="ListingEdit"
                options={({ navigation: { navigate } }) => ({
                    // tabBarLabel: 'ListingEdit',
                    tabBarButton: () => (
                        <NewListingButton
                            onPress={() => navigate('ListingEdit')}
                        />
                    ),
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="plus-circle"
                            color={color}
                            size={size}
                        />
                    ),
                })}
                component={ListingEditScreen}
            />
            <Tab.Screen
                name="Account"
                options={{
                    // tabBarLabel: 'Account',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="account"
                            color={color}
                            size={size}
                        />
                    ),
                }}
                component={AccountNavigator}
            />
        </Tab.Navigator>
    )
}
