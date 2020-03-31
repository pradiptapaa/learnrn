import React, { useContext } from 'react'
import { Text, FlatList, View, Button } from 'react-native'
// Using normal context ...
// import AppContext from '../context/AppContext'
// Using automatic context ....
import { Context } from '../context/AutomaticAppContext'

const IndexScreen = () => {
    // Change data to state
    // const {data,addBlogPost} = useContext(Context)
    const {state,addBlogPost} = useContext(Context)

    return (
        <View>
            <Text>List from context:</Text>
            <Button title={"Add Blog Post"} onPress={addBlogPost}/>
            <FlatList
                // data={data}
                data={state}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({ item }) => {
                    return<Text>{item.title}</Text>}
                } />
        </View>
    )
}

export default IndexScreen;