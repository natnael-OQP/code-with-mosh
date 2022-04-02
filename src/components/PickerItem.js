import { StyleSheet, TouchableOpacity } from 'react-native'
import AppText from './AppText'
const PickerItem = ({ label, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <AppText>{label}</AppText>
        </TouchableOpacity>
    )
}

export default PickerItem

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    },
})
