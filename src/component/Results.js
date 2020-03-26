import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import ResultsDetails from './ResultsDetails';

const Results = ({ title, result }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.result_total}>Results : {result.length}</Text>
            <FlatList
                style={styles.result_details}
                showsHorizontalScrollIndicator={false}
                horizontal
                data={result}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return <ResultsDetails result={item} />
                }} />
        </View>
    )
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 15
    },
    result_total: {
        marginHorizontal: 15
    },
    result_details: {
        paddingHorizontal: 15
    },
    container: {
        marginVertical: 10
    }
})

export default Results;