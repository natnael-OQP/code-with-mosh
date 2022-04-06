import { StyleSheet, FlatList, View } from 'react-native'
import React from 'react'
import Icons from '../components/Icons'
import Screen from '../components/screen'
import ListItem from '../components/ListItem'
import colors from '../config/colors'
import ListItemSeparator from '../components/ListItemSeparator'

const MenuItems = [
    {
        title: 'My Listings',
        name: 'format-list-bulleted',
        backgroundColor: colors.primary,
    },
    {
        title: 'My Message',
        name: 'email',
        backgroundColor: colors.secondary,
    },
]

const MyAccountScreen = () => {
    return (
        <Screen style={styles.screen}>
            <ListItem
                title="natnael"
                subTitle="natnael-oqp"
                image={require('../assets/mosh.jpg')}
            />
            <View style={styles.wrapper}>
                <FlatList
                    data={MenuItems}
                    keyExtractor={(item) => item.name}
                    renderItem={({
                        item: { title, name, backgroundColor },
                    }) => (
                        <ListItem
                            title={title}
                            IconComponent={
                                <Icons
                                    name={name}
                                    backgroundColor={backgroundColor}
                                />
                            }
                        />
                    )}
                    ItemSeparatorComponent={ListItemSeparator}
                />
            </View>
            <ListItem
                title="logout"
                IconComponent={
                    <Icons name="logout" backgroundColor={colors.lightYellow} />
                }
            />
        </Screen>
    )
}

export default MyAccountScreen

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.light,
    },
    wrapper: {
        marginVertical: 25,
    },
})
