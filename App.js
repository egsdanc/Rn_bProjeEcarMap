import React from 'react';
import { View,Text  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
 import Ilkekran from './screens/Ilkekran';
import HaritaSayfasi from './screens/HaritaSayfasi';
import rootReducer from './reducers/index';

 import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Harita from './components/Harita';
import DisplayData from './screens/DisplayData';
 

const store = createStore(rootReducer);

export default function App() {
  
  const Stack = createNativeStackNavigator();

    return (
      <Provider store={store}>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ilkekran" component={Ilkekran}  options={{ headerShown: false }}/>
        <Stack.Screen name="HaritaSayfasi" component={HaritaSayfasi}  options={{ headerShown: false }} />
         <Stack.Screen name='Harita' component={Harita}/>
        <Stack.Screen name= "DisplayData" component={DisplayData}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
