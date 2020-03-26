import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import ResultsDetails from './ResultsDetails';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Results = ({ title, result}) => {
    const navigation = useNavigation();
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
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('SearchDetailScreen',{id:item.id})}>
                            <ResultsDetails result={item} />
                        </TouchableOpacity>)
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

export default  Results;