import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const MainScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text> Hello, I'm Pradipta</Text>
            <TouchableOpacity style={styles.button} onPress={() =>navigation.navigate('ListScreen')}>
                <Text style={styles.text}>To List Screen</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
        },
    button:{
        paddingHorizontal:50,
        paddingVertical:20,
        backgroundColor:'teal',
        margin:20,
        borderRadius:8
    },
    text:{
        color:'white'
    }
})

export default MainScreen;