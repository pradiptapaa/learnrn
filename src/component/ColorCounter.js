import React from 'react'
import { View, TouchableHighlight, Text, StyleSheet } from 'react-native'

const ColorCounter = ({color,onIncrease,onDecrease}) =>{
    return(
        <View style={styles.container}>
            <TouchableHighlight style={styles.button} underlayColor={color} onPress={() =>onIncrease()}>
                <Text>Increase {color}</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button} underlayColor={color} onPress={() =>onDecrease()}>
                <Text>Decrease {color}</Text>
            </TouchableHighlight>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        margin:10
    },
    button:{
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        borderColor:'grey',
        borderWidth:1,
        marginBottom:2,
        borderRadius:8
    }
})
export default ColorCounter;
