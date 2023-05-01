import React  ,{ useEffect,useState } from 'react';
import { View,Text, Button,StyleSheet, FlatList } from 'react-native';
import { useSelector,useDispatch  } from 'react-redux';
 import { useNavigation } from '@react-navigation/native';
 import MapView, { Marker } from "react-native-maps";
 import MapViewDirections from "react-native-maps-directions" ;
 import { useRef } from 'react';
 import { connect } from 'react-redux';
 import { bindActionCreators } from 'redux';

const GOOGLE_MAPS_APIKEY="AIzaSyCnOqmperOSuIWEG0cuWaAizbYFKn9Mi5s";



const Harita = ({datA}) => {


  const mapRef = useRef();
    
     const { originLat, destinationLng,destinationLat , originLng,coordinatesOrigin,coordinatesDestination } = useSelector((state) => state);
  const origin = {latitude: originLat, longitude:  originLng};
  const destination = {latitude: destinationLat, longitude: destinationLng};
  const stopover = {latitude:  coordinatesOrigin, longitude:  coordinatesDestination};

 

  const [distanceAB, setDistanceAB] = useState(0);
  const [durationAB, setDurationAB] = useState(0);
  const [distanceACB, setDistanceACB] = useState(0);
  const [durationACB, setDurationACB] = useState(0);
  const handleDirectionsReady = result => {
    const distanceInKm = result.distance ;
    const durationInHours = result.duration ;
    setDistanceAB(distanceInKm);
    setDurationAB(durationInHours);
  };
  return (
    <View style={styles.container}>
    
  
 
 
      <MapView style={styles.map}
      ref={mapRef}
       mapType="mutedStandard"
      initialRegion={{
        
         latitude: destinationLat,
         longitude:  destinationLng,
         latitudeDelta: 0.005,
         longitudeDelta: 8.950
      }}
      
      
      
      > 
       <MapViewDirections 
    origin={origin}
    destination={destination}
    apikey={GOOGLE_MAPS_APIKEY}
     strokeWidth={3}
    strokeColors="red"
    onReady= {handleDirectionsReady}
    />
        <MapViewDirections 
    origin={origin}
    destination={destination}
    waypoints={[stopover]}

    apikey={GOOGLE_MAPS_APIKEY}
     strokeWidth={3}
    strokeColors="black"
    onReady={result => {
      const distanceInKm = result.distance  ;
      const durationInHours = result.duration ;
      setDistanceACB(distanceInKm);
      setDurationACB(durationInHours);
    }}
    />

     {datA.map((location, index) => (
    <Marker
      key={index}
      coordinate={{ latitude: location.lat, longitude: location.lng }}
      title={location.name}
      description={location.description}
      pinColor="yellow"

    />
  ))}
    
    
     <Marker
coordinate={{
latitude: originLat,
 longitude: originLng,
}}
pinColor="blue"
title="Originnn"
// description={origin.description}
identifier="originnn"   
/>
       <Marker
coordinate={{
latitude: destinationLat,
 longitude: destinationLng,
}}
 
title="destination"
// description={origin.description}
identifier="dest"   
/>
      
      </MapView>
      <View style={styles.renk}> 
   <View style={styles.yan}>        
      <Text> Mesafe: {(distanceAB).toFixed(0)} km</Text>
    <Text>           Saat: {(durationAB).toFixed(0)} dk</Text>
    </View>
 
  
    </View>

      </View>



  );
};

export default Harita;
const styles = StyleSheet.create({
  container: {
     flex:1
  },
  map: {
   flex:1,
   
   
  },
  renk:{
    backgroundColor: "orange"
    
  },
  yan:{
    flexDirection: "row"
  }
});
















/*
  <Text> Origin: {originLat}</Text>
      <Text>Veri1: {originLng}</Text>
      <Text>Destination: {destinationLat}</Text>
      <Text>Veri2: {destinationLng}</Text>
*/

/*
 {datA.map((location, index) => (
    <Marker
      key={index}
      coordinate={{ latitude: location.lat, longitude: location.lng }}
      title={location.name}
      description={location.description}
      pinColor="yellow"

    />
  ))}
*/