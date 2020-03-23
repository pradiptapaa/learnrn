import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import SearchBar from '../component/SearchBar';

const SearchScreen = () => {
    const [term, setTerm] = useState("");
    return (
        <View>
           <SearchBar 
           term={term} 
           onTermChange={newTerm => setTerm(newTerm)}/>
           <Text>{term}</Text>
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
        fontSize:18
    },
    searchIcon: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal:8
    }
})

export default SearchScreen;