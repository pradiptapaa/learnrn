import React, { useContext } from 'react'
import { Text } from 'react-native'
import AppContext from '../context/AppContext'

const IndexScreen = () => {
    const value = useContext(AppContext)
    return (
        <Text>
            Index Screen with context value is = {value}
        </Text>
    )
}

export default IndexScreen;