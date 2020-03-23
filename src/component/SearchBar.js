import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.container}>
            <Icon name="search" style={styles.searchIcon} />
            <TextInput
                autoCapitalize='none'
                autoCorrect={false}
                style={styles.textInput}
                placeholder="Search movie..."
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightgray',
        borderRadius: 8,
        marginHorizontal: 15,
        marginVertical: 15,
        paddingHorizontal: 8,
        flexDirection: 'row'
    },
    textInput: {
        flex: 1,
        fontSize: 18
    },
    searchIcon: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 8
    }
})

export default SearchBar;