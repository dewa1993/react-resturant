import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native'


const Restaurant = ({ restaurantItem }) => {
    return <View style={styles.container}>
        <Image
            style={styles.imageStyle}
            source={{ uri: restaurantItem.image_url }} />
        <Text style={styles.name}>{restaurantItem.name}</Text>

        <Text>{restaurantItem.rating} Stars, {restaurantItem.review_count}  Reviews</Text>

    </View>
}


const styles = StyleSheet.create({

    container: {
        marginLeft: 16

    },
    imageStyle: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 4
    },
    name: {
        fontWeight: "bold",
        fontSize: 14
    }
})

export default Restaurant