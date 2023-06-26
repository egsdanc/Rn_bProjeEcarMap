import React  from 'react';
import { View,Text, Button,StyleSheet } from 'react-native';
import { useSelector,useDispatch  } from 'react-redux';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker } from "react-native-maps";
import { useState } from 'react';
const GOOGLE_MAPS_APIKEY="AIzaSyC1nOqmperO3SuIWEG04cuWaAizb4YFKn9Mi5s";



const DisplayData = ({}) => {
  const { originLat, destinationLng,destinationLat , originLng,coordinatesOrigin,coordinatesDestination } = useSelector((state) => state);
  const Sts = require('../istasyonlar/veri_istasyon');

 
 
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const degistir = () => {
  
    dispatch({ type: 'SET_ORIGINLAT', payload: 1});
    dispatch({ type: 'SET_DESTINATIONLAT', payload: 43 });
    dispatch({ type: 'SET_ORIGINLNG', payload: 2 });
    dispatch({ type: 'SET_DESTINATIONLNG', payload: 76});
  };
  return (
    <View  >
      
      <Text> Origin: {originLat}</Text>
      <Text>Veri1: {originLng}</Text>
      <Text>Destination: {destinationLat}</Text>
      <Text>Veri2: {destinationLng}</Text>
  

      <View style={styles.bosluk} />


      <GooglePlacesAutocomplete
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={400}
        placeholder= "Baslangic konumunu Secin"
        styles={{
            container:{
                flex: 0
            },
            textInput: {
                fontSize: 18            }
        }}
        onPress={(data,details=null) =>{
          console.log(details.geometry
            .location);
            dispatch({ type: 'SET_ORIGINLAT', payload: details.geometry.location.lat});
            dispatch({ type: 'SET_ORIGINLNG', payload: details.geometry.location.lng});

         
        }}
        fetchDetails={true}
        returnKeyType={"search"}
        enablePoweredByContainer={false}
        minLength={2}
        query={{
           key: GOOGLE_MAPS_APIKEY,
           language: "en" 
        }}
        />
          <GooglePlacesAutocomplete
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={400}
        placeholder= "Varis Konumunu Seçin"
        styles={{
            container:{
                flex: 0
            },
            textInput: {
                fontSize: 18
            }
        }}
        onPress={(data,details=null) =>{
          console.log(details.geometry
            .location);
            dispatch({ type: 'SET_DESTINATIONLAT', payload: details.geometry.location.lat });
            dispatch({ type: 'SET_DESTINATIONLNG', payload: details.geometry.location.lng });


        }}
        fetchDetails={true}
        returnKeyType={"search"}
        enablePoweredByContainer={false}
        minLength={2}
        query={{
           key: GOOGLE_MAPS_APIKEY,
           language: "en" 
        }}
        />
        <Button onPress={()=>
           {
            navigation.navigate('HaritaSayfasi');
           }} title={"diger sayfa"}></Button>



 
      





      </View>



  );
};

export default DisplayData;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  bosluk: {
    height: "2%"
  }
});
