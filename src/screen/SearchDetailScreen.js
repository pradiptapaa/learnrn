import React from 'react'
import { View, Text } from 'react-native';

const SearchDetailScreen = ({navigation,route}) =>{
    const id = route.params?.id

    console.log(id)

    return(
        <View>
            <Text>The movie id is : {id}</Text>
        </View>
    );
};

export default SearchDetailScreen;