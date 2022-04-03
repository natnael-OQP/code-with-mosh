import { StyleSheet, TextInput, View, Platform } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors'

const AppTextInput = ({ icon, size = 20, placeholder, ...other }) => {
    return (
        <View style={styles.textInputContainer}>
            {icon && (
                <MaterialCommunityIcons
                    name={icon}
                    size={size}
                    color={colors.medium}
                />
            )}
            <TextInput
                placeholder={placeholder}
                style={styles.textInput}
                {...other}
            />
        </View>
    )
}

export default AppTextInput

const styles = StyleSheet.create({
    textInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 40,
        paddingHorizontal: 10,
        backgroundColor: colors.light,
        borderRadius: 20,
        marginTop: 15,
    },
    textInput: {
        fontSize: 18,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Aveinr',
        width: '100%',
        height: '100%',
        padding: 5,
        marginLeft: 7,
        color: colors.dark,
    },
})
