import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../reducers/index';
import DisplayData from './DisplayData';


const store = createStore(rootReducer);

const Ilkekran = () => {
  return (
    <View style={{backgroundColor: "orange", flex:1}}>
    <DisplayData />
    </View>
  )
}

export default Ilkekran

const styles = StyleSheet.create({

  
})