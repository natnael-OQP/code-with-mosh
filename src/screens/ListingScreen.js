import { StyleSheet, FlatList } from 'react-native'
import { useState, useEffect } from 'react'

import Card from '../components/Card'
import AppText from '../components/AppText'
import AppButton from '../components/AppButton'
import Screen from '../components/screen'
import colors from '../config/colors'
import ActivityIndicator from '../components/ActivityIndicator'
import useApi from '../hooks/useApi'

const ListingScreen = ({ navigation }) => {
    const { error, loading, listings, fetcher } = useApi()

    useEffect(() => {
        fetcher('listings')
    }, [])

    // not working for web
    // if (loading) return <ActivityIndicator />

    return (
        <Screen style={styles.screen}>
            {error && (
                <>
                    <AppText>Couldn't retrieve listings.</AppText>
                    <AppButton title="retry" onPress={fetcher} />
                </>
            )}
            <FlatList
                data={listings}
                refreshing={false}
                onRefresh={() => fetcher()}
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
