import { StyleSheet, TouchableOpacity } from 'react-native'
import AppText from './AppText'
const PickerItem = ({ item, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <AppText>{item.label}</AppText>
        </TouchableOpacity>
    )
}

export default PickerItem

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    },
})
