import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import AppText from '../components/AppText'

import ListItem from '../components/ListItem'
import colors from '../config/colors'

function ListingDetailsScreen({ route: { params } }) {
    const { images, title, price } = params
    return (
        <View>
            <Image style={styles.image} source={{ uri: images[0].url }} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.price}>{price}</AppText>
                <View style={styles.userContainer}>
                    <ListItem
                        image={require('../assets/mosh.jpg')}
                        title="Mosh Hamedani"
                        subTitle="5 Listings"
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: '100%',
        height: 300,
    },
    price: {
        color: colors.secondary,
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: '500',
    },
    userContainer: {
        marginVertical: 40,
    },
})

export default ListingDetailsScreen
