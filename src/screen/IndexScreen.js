import React, { useContext } from 'react'
import { Text, FlatList, View, Button, StyleSheet, TouchableOpacity } from 'react-native'
// Using normal context ...
// import AppContext from '../context/AppContext'
// Using automatic context ....
import { Context } from '../context/AutomaticAppContext'
import Icon from 'react-native-vector-icons/Feather';


const IndexScreen = () => {
    // Change data to state
    // const {data,addBlogPost} = useContext(Context)
    const {state,addBlogPost, deleteBlogPost} = useContext(Context)

    return (
        <View>
            <Text>List from context:</Text>
            <Button title={"Add Blog Post"} onPress={addBlogPost}/>
            <FlatList
                // data={data}
                data={state}
                keyExtractor={(blogPost) => blogPost.id}
                renderItem={({ item }) => {
                    return <View style={styles.row}>
                        <Text style={styles.title}>{item.title} - {item.id}</Text>
                        <TouchableOpacity onPress={()=> deleteBlogPost(item.id)}>
                        <Icon name="trash" style={styles.title}/>
                        </TouchableOpacity>
                        </View>
                    }
                } />
        </View>
    )
}

const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:20,
        borderTopWidth:1,
        borderColor:'gray'
    },
    title:{
        fontSize:18
    },
    icon:{
        fontSize:24
    }

})

export default IndexScreen;