import React from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native'
import Restaurant from '../components/Restaurant'
import { withNavigation } from 'react-navigation'

const RestaurantList = ({ title, restaurants, navigation }) => {

    if(!restaurants.length){
        return null;
    }

    return <View style={styles.container}>
    
        <Text style={styles.titleStyle}>{title}</Text>
        <FlatList
            horizontal
            data={restaurants}
            keyExtractor={result => result.id}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
                return <TouchableOpacity
                    onPress={() => navigation.navigate('Details', {
                        id: item.id
                    })}>
                    <Restaurant restaurantItem={item} />
                </TouchableOpacity>

            }}
        />

    </View>
};

const styles = StyleSheet.create({

    container: {
        marginBottom: 16
    },
    titleStyle: {
        marginLeft: 16,
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 4
    }


})

export default withNavigation(RestaurantList) 