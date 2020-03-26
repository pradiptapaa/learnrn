import React, { useEffect } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import useResultImage from '../hook/useResultImage';

const ResultsDetails = ({ result }) => {
    const [configApi, config, configErrorMessage] = useResultImage();

    useEffect(() => {
        configApi();
    }, []);

    return (
        <View style={styles.container}>
            {result.backdrop_path != null
                ?
                <Image style={styles.image} source={{ uri: config.base_url + 'w300' + result.backdrop_path }} />
                :
                <Image style={styles.image} source={{ uri: 'https://seeba.se/wp-content/themes/consultix/images/no-image-found-360x260.png'}} />
            }

            <Text style={styles.title}>{result.title} </Text>
            <Text>Popularity: {result.popularity}</Text>
            <Text>Release Date: {result.release_date}</Text>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginRight: 10
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 4
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16
    }
})

export default ResultsDetails;