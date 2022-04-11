import { StyleSheet, FlatList } from 'react-native'
import { useState, useEffect } from 'react'

import Card from '../components/Card'
import Screen from '../components/screen'
import colors from '../config/colors'
import instance from '../api/fetch'

const ListingScreen = ({ navigation }) => {
    const [listings, setListings] = useState()

    useEffect(() => {
        const fetcher = async () => {
            const { data } = await instance.get('listings')
            setListings(data)
        }
        fetcher()
    }, [])
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
                        subTitle={item?.price}
                        image={item?.images[0].url}
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
