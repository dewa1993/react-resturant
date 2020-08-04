import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBarComponent from './../components/SearchBarComponent'
import useResults from '../hooks/useResults'
import RestaurantList from '../components/RestaurantList'

const HomeScreen = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [searchApi, restuarants, errorMessage] = useResults();

    const filterRestaurants = (price) => {
        return restuarants.filter(result => {
            return result.price === price
        })
    }

    return <>

        <ScrollView>
            <SearchBarComponent
                onSubmitted={() => searchApi(searchTerm)}
                term={searchTerm}
                onTermChange={setSearchTerm}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}



            <RestaurantList
                title="Cost effective"
                restaurants={filterRestaurants('$')} />

            <RestaurantList
                title="Bit Pricer"
                restaurants={filterRestaurants('$$')} />

            <RestaurantList
                title="Big Spender"
                restaurants={filterRestaurants('$$$')} />

        </ScrollView>


    </>
}


const styles = StyleSheet.create({


})

export default HomeScreen;
