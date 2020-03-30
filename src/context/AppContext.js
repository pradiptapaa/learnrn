import React, { useState, useReducer } from 'react'

const AppContext = React.createContext();

const blogReducer = (state,action) =>{
    switch (action.type){
        case 'add_blogpost':
            return [...state, {title:`Blog Post #${state.length+1}`}];
        default:
            return state;
    }
};

export const AppProvider = ({children}) => {

    // Using useState
    // const [blogPosts,setBlogPosts] = useState([]);
    const [blogPosts,dispatch] = useReducer(blogReducer,[]);

    const addBlogPost = () =>{
        // Using useState
        // setBlogPosts([...blogPosts,{title:`My blog post #${blogPosts.length+1}`}])
        dispatch({type:'add_blogpost'});
    };

    return <AppContext.Provider
    value={{data: blogPosts,addBlogPost}}>
        {children}
    </AppContext.Provider>
}

export default AppContext;