import { StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import { useState, useEffect } from 'react'

import Card from '../components/Card'
import AppText from '../components/AppText'
import AppButton from '../components/AppButton'
import Screen from '../components/screen'
import colors from '../config/colors'
import instance from '../api/fetch'

const ListingScreen = ({ navigation }) => {
    const [listings, setListings] = useState()
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    const fetcher = async () => {
        try {
            setLoading(true)
            const { data } = await instance.get('listings')
            setListings(data)
            setLoading(false)

            setError(false)
        } catch (err) {
            setError(true)
        }
    }

    useEffect(() => {
        fetcher()
    }, [])

    return (
        <Screen style={styles.screen}>
            {error && (
                <>
                    <AppText>Couldn't retrieve listings.</AppText>
                    <AppButton title="retry" onPress={fetcher} />
                </>
            )}
            {loading && <ActivityIndicator size="large" />}
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
