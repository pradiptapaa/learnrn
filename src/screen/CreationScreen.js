import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const CreationScreen = () =>{
    const [title,setTitle] = useState("");
    const [content,setContent] = useState("");

    return(
        <View>
            <Text>Enter title:</Text>
            <TextInput value={title} style={styles.input} onChangeText={text => setTitle(text)} />
            <Text>Enter content:</Text>
            <TextInput value={content} style={styles.input} onChangeText={text => setContent(text)} />
        </View>
    )
};

const styles = StyleSheet.create({
    input:{
        borderWidth:1,
        borderColor:'black',
        borderRadius:4
    }
})

export default CreationScreen;