import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

const Results = ({ title, result }) => {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <Text> Results : {result.length}</Text>
            <FlatList
                horizontal
                data={result}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return <Text>{item.title}, </Text>
                }} />
        </View>
    )
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default Results;