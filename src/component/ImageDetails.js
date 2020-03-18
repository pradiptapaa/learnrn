import React from 'react'
import { Image, View, Text, StyleSheet } from 'react-native'

const ImageDetails = ({ imageUri, imageText, imageScore }) => {
    return (
        <View style={styles.container}>
            <Text>{imageText}</Text>
            <Image source={imageUri} style={styles.image} />
            <Text>Image score - {imageScore}</Text>
        </View>
    )
};

const styles=StyleSheet.create({
    container:{
        margin: 8,
        padding:8,
        borderColor:'teal',
        borderWidth:2,
        borderRadius: 8
    },
    image:{
        flex:1,
        flexDirection:'row'
    }
})

export default ImageDetails;