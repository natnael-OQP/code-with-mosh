import { StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
const Icons = ({
    backgroundColor = 'black',
    name = 'email',
    color = 'white',
    size = 25,
}) => {
    return (
        <View style={[styles.container, { backgroundColor }]}>
            <MaterialCommunityIcons name={name} size={size} color={color} />
        </View>
    )
}

export default Icons

const styles = StyleSheet.create({
    container: {
        padding: 8,
        width: 40,
        height: 40,
        borderRadius: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
