import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const DetailsScreen = ({ navigation }) => {

    const id = navigation.getParam('id')
    return <View>
        <Text>the id is: {id}</Text>
    </View>
};

const styles = StyleSheet.create({

})

export default DetailsScreen