import 'react-native-gesture-handler';
import React from 'react'
import MainScreen from './src/screen/MainScreen';
import ListScreen from './src/screen/ListScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='MainScreen' component={MainScreen} />

        <Stack.Screen name='ListScreen' component={ListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;