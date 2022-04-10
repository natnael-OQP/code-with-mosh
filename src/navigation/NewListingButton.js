import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors'

const NewListingButton = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons
                    name="plus-circle"
                    size={35}
                    color={colors.white}
                />
            </View>
        </TouchableOpacity>
    )
}

export default NewListingButton

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        width: 70,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        borderColor: colors.white,
        borderWidth: 7,
        bottom: 25,
    },
})
