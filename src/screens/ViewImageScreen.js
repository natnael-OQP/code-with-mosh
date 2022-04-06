import { StyleSheet, View, Image } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors'
import Screen from '../components/screen'

const ViewImageScreen = () => {
    return (
        <Screen>
            <View style={styles.container}>
                <View style={styles.icons}>
                    <MaterialCommunityIcons
                        name="close"
                        size={30}
                        color="white"
                    />
                    <MaterialCommunityIcons
                        name="trash-can-outline"
                        size={30}
                        color="white"
                    />
                </View>
                <Image
                    source={require('../assets/chair.jpg')}
                    style={styles.image}
                />
            </View>
        </Screen>
    )
}

export default ViewImageScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        flex: 1,
    },
    icons: {
        padding: 30,

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    image: {
        width: '100%',
        height: '80%',
        resizeMode: 'cover',
    },
})
