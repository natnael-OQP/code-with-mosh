import { useState } from 'react'
import {
    StyleSheet,
    Modal,
    View,
    FlatList,
    TouchableWithoutFeedback,
} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors'
import AppText from './AppText'
import PickerItem from './PickerItem'

const categories = [
    { label: 'Furniture', value: 1 },
    { label: 'Clothing', value: 2 },
    { label: 'Camera', value: 3 },
]

const AppPicker = ({ name, size = 20 }) => {
    const [open, setOpen] = useState(false)
    const [placeholder, setPlaceholder] = useState(categories[0])

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setOpen(!open)}>
                <View style={styles.textInputContainer}>
                    {name && (
                        <MaterialCommunityIcons
                            name={name}
                            size={size}
                            color={colors.medium}
                        />
                    )}
                    <AppText style={styles.text}>
                        {placeholder && placeholder.label}
                    </AppText>
                    <MaterialCommunityIcons
                        name="chevron-down"
                        size={size}
                        color={colors.medium}
                    />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={open} animationType="slide">
                <FlatList
                    data={categories}
                    keyExtractor={(item) => item.value}
                    renderItem={({ item }) => (
                        <PickerItem
                            onPress={() => {
                                setOpen(!open)
                                setPlaceholder(item)
                            }}
                            label={item.label}
                        />
                    )}
                />
            </Modal>
        </>
    )
}

export default AppPicker

const styles = StyleSheet.create({
    textInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 40,
        paddingHorizontal: 10,
        backgroundColor: colors.light,
        borderRadius: 20,
        marginVertical: 10,
    },
    text: {
        width: '100%',
    },
})
