import React from 'react'
import { FlatList, Text, StyleSheet } from 'react-native';

const ListScreen = () => {
    const animals = [
        { type: 'Cat', age:'2' },
        { type: 'Wild Cat' , age:'3' },
        { type: 'Dog' , age:'4' },
        { type: 'Wild Dog' , age:'5' },
        { type: 'Hyena' , age:'6' },
        { type: 'Tiger' , age:'7' },
        { type: 'Lion' , age:'8' },
        { type: 'Cheetah' , age:'9' },
        { type: 'Hawk' , age:'10' },
        { type: 'Grasshopper', age:'11' }
    ];
    return (
        <FlatList
            data={animals}
            renderItem={({ item }) => {
                return <Text style={styles.text}>The {item.type} is {item.age} years old</Text>
            }} />
    )
};

const styles = StyleSheet.create({
    text:{
        color:'white',
        paddingHorizontal:10,
        paddingVertical:10,
        marginVertical:10,
        fontSize:30,
        backgroundColor:'teal'
    }
})



export default ListScreen;