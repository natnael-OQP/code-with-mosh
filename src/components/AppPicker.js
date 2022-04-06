import React, { useState } from 'react'
import {
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    Modal,
    Button,
    FlatList,
} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import AppText from './AppText'
import Screen from './screen'
import PickerItem from './PickerItem'
import colors from '../config/colors'

function AppPicker({
    icon,
    items,
    onSelectItem,
    placeholder,
    selectedItem,
    numberOfColumns,
    PickerItemComponent = PickerItem,
    width = '100%',
}) {
    const [modalVisible, setModalVisible] = useState(false)

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={[styles.container, { width }]}>
                    {icon && (
                        <MaterialCommunityIcons
                            name={icon}
                            size={20}
                            color={colors.medium}
                            style={styles.icon}
                        />
                    )}
                    {selectedItem ? (
                        <AppText style={styles.text}>
                            {selectedItem.label}
                        </AppText>
                    ) : (
                        <AppText style={styles.placeholder}>
                            {placeholder}
                        </AppText>
                    )}

                    <MaterialCommunityIcons
                        name="chevron-down"
                        size={20}
                        color={colors.medium}
                    />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <Screen>
                    <Button
                        title="Close"
                        onPress={() => setModalVisible(false)}
                    />
                    <FlatList
                        data={items}
                        keyExtractor={(item) => item.value.toString()}
                        numColumns={numberOfColumns}
                        renderItem={({ item }) => (
                            <PickerItemComponent
                                item={item}
                                label={item.label}
                                onPress={() => {
                                    setModalVisible(false)
                                    onSelectItem(item)
                                }}
                            />
                        )}
                    />
                </Screen>
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        padding: 15,
        marginVertical: 10,
    },
    icon: {
        marginRight: 10,
    },
    placeholder: {
        color: colors.medium,
        flex: 1,
    },
    text: {
        flex: 1,
    },
})

export default AppPicker
