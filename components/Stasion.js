import { StyleSheet, Text, View, FlatList,TouchableOpacity } from 'react-native'
import React, { useEffect,useState } from 'react'
import { useSelector,useDispatch  } from 'react-redux';
import MapViewDirections from "react-native-maps-directions" ;
const GOOGLE_MAPS_APIKEY="AIzaSyCnOqmperOSuIWEG0cuWaAizbYFKn9Mi5s";


const Stasion = ({ veri, latH, lngH }) => {
  


    const { originLat, destinationLng,destinationLat , originLng,coordinatesOrigin,coordinatesDestination } = useSelector((state) => state);
    const dispatch = useDispatch();
    const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [stopover, setStopover] = useState(null);


    useEffect(() => {
 
      const origin = { latitude: originLat, longitude: originLng };
      const destination = { latitude: destinationLat, longitude: destinationLng };
      const stopover = { latitude: latH, longitude: lngH };
  
      setOrigin(origin);
      setDestination(destination);
      setStopover(stopover);
 
    }, []);
    

    
    
  
    
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
    <View style={styles.container}
   /* onPress={() => {
      dispatch({ type: 'SET_COORDINATESORIGIN', payload: latH });
      dispatch({ type: 'SET_COORDINATESDESTINATION', payload: lngH });

   
      }} */
    
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
     strokeColors={['#FF7F00']}
    onReady={result => {
      const distanceInKm = result.distance ;
      const durationInHours = result.duration ;
      setDistanceACB(distanceInKm);
      setDurationACB(durationInHours);
    }}
    />
     
     
      <Text>{veri}</Text>
       
    <Text>  mesafeyi { (distanceACB-distanceAB).toFixed(0)}  km uzatir</Text>
    <Text> güzergahi { ((durationACB-durationAB)/1.5).toFixed(0)}  dk uzatir</Text>
     <Text></Text>
    </View>
  )
}

export default Stasion

const styles = StyleSheet.create({
    container: {
    paddingTop:10
    }
})