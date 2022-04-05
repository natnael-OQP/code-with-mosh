import { StyleSheet, TouchableOpacity, View } from 'react-native'

import Icons from './Icons'
import AppText from './AppText'

const CategoryPickerItem = ({ item, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Icons
                backgroundColor={item.backgroundColor}
                name={item.icon}
                size={80}
            />
            <AppText style={styles.label}>{item.label}</AppText>
        </TouchableOpacity>
    )
}

export default CategoryPickerItem

const styles = StyleSheet.create({
    container: {
        width: '33%',
        paddingHorizontal: 20,
        paddingVertical: 25,
        alignItems: 'center',
    },
    label: {
        marginTop: 12,
    },
})
