import { StyleSheet, TextInput, View, Platform } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors'

const AppTextInput = ({ name, size = 20, placeholder }) => {
    return (
        <View style={styles.textInputContainer}>
            {name && (
                <MaterialCommunityIcons
                    name={name}
                    size={size}
                    color={colors.medium}
                />
            )}
            <TextInput placeholder={placeholder} style={styles.textInput} />
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
