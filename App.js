import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import ListingDetailsScreen from './src/screens/ListingDetailsScreen'
import MessagesScreen from './src/screens/MessagesScreen'
import MyAccountScreen from './src/screens/MyAccountScreen'
import ViewImageScreen from './src/screens/ViewImageScreen'
import WelcomeScreen from './src/screens/WelcomeScreen'
import ListingScreen from './src/screens/ListingScreen'
import RegisterScreen from './src/screens/registerScreen'
import LoginScreen from './src/screens/LoginScreen'
import ListingEditScreen from './src/screens/ListingEditScreen'

export default function App() {
    return <ListingEditScreen />
}
