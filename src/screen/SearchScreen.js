import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import SearchBar from '../component/SearchBar';
import moviedb from '../api/moviedb'

const SearchScreen = () => {
    const [term, setTerm] = useState("");
    const [result, setResult] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async () => {
        try {
            const response = await moviedb.get('/search/movie', {
                params: {
                    api_key: '8c3840e4b2d6509ad49c9ba7a78bd582',
                    query: term
                }
            });
            setResult(response.data.results)
            setErrorMessage("")
        } catch (error) {
            console.log(error)
            setErrorMessage("Something went wrong ...")
        }
    }

    const doSearch = () => {
        term.length == 0 ? <Text>Movie can't be empty</Text> : searchApi
    }
    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={searchApi} />
            {errorMessage.length != 0?<Text style={styles.errorMessage}>{errorMessage}</Text>:null}
            <Text style={styles.result}>There are {result.length} movies for keyword: {term}</Text>
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
    },
    errorMessage:{
        color:'red',
        marginHorizontal:15

    },
    result:{
        marginHorizontal:15
    }
})

export default SearchScreen;