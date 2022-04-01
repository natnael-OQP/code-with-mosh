import { StyleSheet, FlatList, View } from 'react-native'
import Card from '../components/Card'
import Screen from '../components/Screen'
import colors from '../config/colors'

const listings = [
    {
        id: '1',
        title: 'Red jacket for sale',
        subTitle: '$1000',
        image: require('../assets/jacket.jpg'),
    },
    {
        id: '2',
        title: 'Red jacket for sale',
        subTitle: '$1000',
        image: require('../assets/jacket.jpg'),
    },
]

const ListingScreen = () => {
    return (
        <Screen style={styles.screen}>
            <FlatList
                data={listings}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item: { title, subTitle, image } }) => (
                    <Card title={title} subtitle={subTitle} image={image} />
                )}
            />
        </Screen>
    )
}

export default ListingScreen

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.light,
        padding: 20,
    },
})
