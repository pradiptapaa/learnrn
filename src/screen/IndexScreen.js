import React, { useContext } from 'react'
import { Text, FlatList, View, Button } from 'react-native'
import AppContext from '../context/AppContext'

const IndexScreen = () => {
    const {data,addBlogPost} = useContext(AppContext)

    return (
        <View>
            <Text>List from context:</Text>
            <Button title={"Add Blog Post"} onPress={addBlogPost}/>
            <FlatList
                data={data}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({ item }) => {
                    return<Text>{item.title}</Text>}
                } />
        </View>
    )
}

export default IndexScreen;