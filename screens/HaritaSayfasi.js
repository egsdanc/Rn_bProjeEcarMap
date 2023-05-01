import React from 'react';
import { StyleSheet, View,FlatList,Text, TouchableOpacity } from 'react-native';
  import Harita from '../components/Harita';
  import Stasion from '../components/Stasion';
import { useState } from 'react';
 import data from "../istasyonlar/veri_istasyon.json"
 import { useSelector,useDispatch  } from 'react-redux';


const HaritaSayfasi = () => {
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [pressedItemId, setPressedItemId] = useState(null);
      const { originLat, destinationLng,destinationLat , originLng,coordinatesOrigin,coordinatesDestination } = useSelector((state) => state);
      const dispatch = useDispatch();

   return (
    <View style={{flex:1}}>
   <View style={{flex:1}}>      
    <Harita datA={data}/>
 </View >
       <View style={{flex:1}}>
       
       <FlatList
  style={{flex: 1}}
  data={data}
  renderItem={({ item }) => (
      <TouchableOpacity
      style={[
        styles.stasion,
        selectedItemId === item.id && styles.selectedStasion,
        pressedItemId === item.id && styles.pressedStasion,
      ]}
      onPressIn={() => setPressedItemId(item.id)}
      onPressOut={() => setPressedItemId(null)}
      onPress={() => {
        dispatch({ type: 'SET_COORDINATESORIGIN', payload: item.lat });
        dispatch({ type: 'SET_COORDINATESDESTINATION', payload: item.lng });
        setSelectedItemId(item.id);
      }}
      
      >
      <Stasion
    
      onPressIn={() => setPressedItemId(item.id)}
      onPressOut={() => setPressedItemId(null)}
      onPress={() => setSelectedItemId(item.id)}
      veri={item.name}
      latH={item.lat}
      lngH={item.lng}
    />  
    </TouchableOpacity>
  )}
  keyExtractor={item => item.id}
/>
           </View>
    </View>
  )
}

export default HaritaSayfasi

const styles = StyleSheet.create({
Harita: { 
  flex:1

},
bol:{
  flex:1
},
container:{
  flex:1,
  
},
stasion: {
  backgroundColor: '#FFFFFF',
  padding: 10,
  marginVertical: 8,
  marginHorizontal: 16,
},
selectedStasion: {
  backgroundColor: '#CCCCCC',
},
pressedStasion: {
  backgroundColor: '#999999',
},

})