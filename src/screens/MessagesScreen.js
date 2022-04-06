import { useState } from 'react'
import { StyleSheet, FlatList } from 'react-native'
import DeleteListItem from '../components/DeleteListItem'
import ListItem from '../components/ListItem'
import ListItemSeparator from '../components/ListItemSeparator'
import Screen from '../components/screen'

const initial = [
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
    const [message, serMessage] = useState(initial)
    const [refreshing, serRefreshing] = useState(false)
    const handelDelete = () => {
        console.log('deleted')
    }
    return (
        <Screen>
            <FlatList
                data={message}
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
                refreshing={refreshing}
                onRefresh={() => {
                    serMessage([])
                }}
            />
        </Screen>
    )
}

export default MessagesScreen

const styles = StyleSheet.create({})
