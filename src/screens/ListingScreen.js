import { StyleSheet, FlatList } from 'react-native'
import Card from '../components/Card'
import Screen from '../components/screen'
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
        title: 'logo for sale',
        subTitle: '$1000',
        image: require('../assets/splash.png'),
    },
]

const ListingScreen = ({ navigation }) => {
    return (
        <Screen style={styles.screen}>
            <FlatList
                data={listings}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Card
                        onPress={() =>
                            navigation.navigate('ListingDetails', item)
                        }
                        title={item?.title}
                        subtitle={item?.subTitle}
                        image={item?.image}
                    />
                )}
            />
        </Screen>
    )
}

export default ListingScreen

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.light,
        paddingHorizontal: 10,
    },
})
