import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons'


const SearchBarComponent = ({ term, onTermChange, onSubmitted }) => {
    return <View
        style={styles.backgroundStyle}>

        <Feather
            name="search"
            style={styles.iconStyle} />

        <TextInput
            placeholder={"Search"}
            autoCapitalize="none"
            value={term}
            onChangeText={onTermChange}
            autoCorrect={false}
            onEndEditing={onSubmitted}
            style={styles.inputStyle}
        />
    </View>
}

const styles = StyleSheet.create({

    backgroundStyle: {
        flexDirection: "row",
        backgroundColor: '#F1EEF0',
        height: 48,
        borderRadius: 8,
        marginHorizontal: 16,
        marginVertical: 8
    },
    inputStyle: {
        flex: 1
    },
    iconStyle: {
        marginHorizontal: 8,
        alignSelf: "center",
        fontSize: 32
    }

})

export default SearchBarComponent;