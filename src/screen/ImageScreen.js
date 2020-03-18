import React from 'react'
import ImageDetails from '../component/ImageDetails'
import { View, ScrollView } from 'react-native'

const ImageScreen = () => {
    return (
        <ScrollView>
            <ImageDetails
                imageText={"Beach"}
                imageUri={require('../asset/beach.jpg')}
                imageScore={"40/100"}
            />
            <ImageDetails
                imageText={"Forest"}
                imageUri={require('../asset/forest.jpg')}
                imageScore={"60/100"}
            />
            <ImageDetails
                imageText={"Mountain"}
                imageUri={require('../asset/mountain.jpg')}
                imageScore={"40/100"}
            />
        </ScrollView>
    )
};

export default ImageScreen;