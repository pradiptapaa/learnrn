import React, { useState } from 'react'

const AppContext = React.createContext();

export const AppProvider = ({children}) => {

    const [blogPosts,setBlogPosts] = useState([]);

    const addBlogPost = () =>{
        setBlogPosts([...blogPosts,{title:`My blog post #${blogPosts.length}`}])
    }

    return <AppContext.Provider
    value={{data: blogPosts,addBlogPost}}>
        {children}
    </AppContext.Provider>
}

export default AppContext;