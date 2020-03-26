import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Text, ScrollView } from 'react-native';
import SearchBar from '../component/SearchBar';
import useResult from '../hook/useResult';
import Results from '../component/Results';

const SearchScreen = () => {
    const [term, setTerm] = useState("");
    const [searchApi, result, errorMessage] = useResult();

    const filterByLanguage = (language) =>{
        return result.filter(result =>{
            return result.original_language === language;
        })
    }

    return (
        <ScrollView>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)} />
            {errorMessage.length != 0
                ?
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                :
                null}
            <Text style={styles.result}>There are {result.length} movies for keyword: {term}</Text>
            <Results result={filterByLanguage('id')} title="Indonesian Language Movies" />
            <Results result={filterByLanguage('en')} title="English Language Movies" />
            <Results result={filterByLanguage('fr')} title="Franch Language Movies" />
        </ScrollView>
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
    errorMessage: {
        color: 'red',
        marginHorizontal: 15

    },
    result: {
        marginHorizontal: 15
    }
})

export default SearchScreen;