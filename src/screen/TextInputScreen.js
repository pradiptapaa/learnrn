import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Text } from 'react-native';

const TextInputScreen = () => {
    const [name, setName] = useState("")
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                autoCorrect={false}
                autoCapitalize='none'
                onChangeText={(text) => setName(text)}
            />
            {name.length != 0 && name.length < 6
                ? <Text style={{color:'red'}}>Password must be longer than 6 character</Text>
                : null}
            <Text style={styles.text}>My name is {name}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        padding: 8
    },
    textInput: {
        borderColor: 'teal',
        borderWidth: 2
    },
    text: {
        paddingVertical: 8
    }
})

export default TextInputScreen;