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
import LayoutScreen from './src/screen/LayoutScreen';
import SearchScreen from './src/screen/SearchScreen';
import SearchDetailScreen from './src/screen/SearchDetailScreen';
import IndexScreen from './src/screen/IndexScreen';
// The normal context ...
// import { AppProvider } from './src/context/AppContext'
import { Provider } from './src/context/AutomaticAppContext';
import IndexScreenDetails from './src/screen/IndexScreenDetails';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='MainScreen' component={MainScreen} />
        <Stack.Screen name='ListScreen' component={ListScreen} />
        <Stack.Screen name='ImageScreen' component={ImageScreen} />
        <Stack.Screen name='ColorScreen' component={ColorScreen} />
        <Stack.Screen name='ColorScreenReducer' component={ColorScreenReducer} />
        <Stack.Screen name='TextInputScreen' component={TextInputScreen} />
        <Stack.Screen name='LayoutScreen' component={LayoutScreen} />
        <Stack.Screen name='SearchScreen' component={SearchScreen} />
        <Stack.Screen name='SearchDetailScreen' component={SearchDetailScreen} />
        <Stack.Screen name='IndexScreen' component={IndexScreen} />
        <Stack.Screen name='IndexScreenDetails' component={IndexScreenDetails}/>


      </Stack.Navigator>
    </NavigationContainer>
  )
}
//Change to automatic context ...
// export default () => {
//   return <AppProvider><App />
//   </AppProvider>
// }

export default () => {
  return <Provider><App />
  </Provider>
}