import React from 'react'
import { StyleSheet, View, Dimensions } from 'react-native';

const LayoutScreen = () => {

    return(
        <View style={styles.container}>
            <View style={styles.view1}/>
            <View style={styles.view2}/>
            <View style={styles.view3}/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        borderColor:'teal',
        borderWidth:2,
        height:Dimensions.get('screen').height - 150,
        margin:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    view1: {
        height:100,
        width:100,
        backgroundColor:'red'
    },
    view2: {
        height:100,
        width:100,
        backgroundColor:'green',
        top:50
    },
    view3: {
        height:100,
        width:100,
        backgroundColor:'blue',
        top:100
    }
})

export default LayoutScreen;