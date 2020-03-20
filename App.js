import 'react-native-gesture-handler';
import React from 'react'
import MainScreen from './src/screen/MainScreen';
import ListScreen from './src/screen/ListScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ImageScreen from './src/screen/ImageScreen';
import ColorScreen from './src/screen/ColorScreen';
import ColorScreenReducer from './src/screen/ColorScreenReducer';
import TextInputScreen from './src/screen/TextInputScreen';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='MainScreen' component={MainScreen} />
        <Stack.Screen name='ListScreen' component={ListScreen} />
        <Stack.Screen name='ImageScreen' component={ImageScreen}/>
        <Stack.Screen name='ColorScreen' component={ColorScreen}/>
        <Stack.Screen name='ColorScreenReducer' component={ColorScreenReducer}/>
        <Stack.Screen name='TextInputScreen' component={TextInputScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;