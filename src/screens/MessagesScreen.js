import React from 'react'
import { StyleSheet, Text, FlatList } from 'react-native'
import DeleteListItem from '../components/DeleteListItem'
import ListItem from '../components/ListItem'
import ListItemSeparator from '../components/ListItemSeparator'
import Screen from '../components/Screen'

const messages = [
    {
        id: '1',
        title: 'Hello',
        subTitle: 'random text that is amazing ',
        image: require('../assets/mosh.jpg'),
    },
    {
        id: '2',
        title: 'Hello 2',
        subTitle: 'random text that is amazing 2',
        image: require('../assets/mosh.jpg'),
    },
]

const MessagesScreen = () => {
    const handelDelete = () => {
        console.log('deleted')
    }
    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={(message) => message.id}
                renderItem={({ item, index }) => (
                    <ListItem
                        title={item.title}
                        subTitle={item.subTitle}
                        image={item.image}
                        onPress={() => console.log(item)}
                        renderRightActions={() => (
                            <DeleteListItem onPress={handelDelete} />
                        )}
                    />
                )}
                ItemSeparatorComponent={ListItemSeparator}
            />
        </Screen>
    )
}

export default MessagesScreen

const styles = StyleSheet.create({})
