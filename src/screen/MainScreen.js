import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const MainScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text> Hello, I'm Pradipta</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ListScreen')}>
                <Text style={styles.text}>To List Screen</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ImageScreen')}>
                <Text style={styles.text}>To Image Screen</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ColorScreen')}>
                <Text style={styles.text}>To Color Screen</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ColorScreenReducer')}>
                <Text style={styles.text}>To Color Screen Reducer Version</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TextInputScreen')}>
                <Text style={styles.text}>To TextInput Screen</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LayoutScreen')}>
                <Text style={styles.text}>To Layout Screen</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SearchScreen')}>
                <Text style={styles.text}>To Search Screen</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('IndexScreen')}>
                <Text style={styles.text}>To Index Screen</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    button: {
        width: 300,
        height: 50,
        backgroundColor: 'teal',
        margin: 5,
        borderRadius: 8,
        alignItems:'center',
        justifyContent:'center'
    },
    text: {
        color: 'white'
    }
})

export default MainScreen;