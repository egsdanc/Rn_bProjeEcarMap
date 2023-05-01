import { combineReducers } from 'redux';
import originLatReducer from './originLatReducer'; 
import originLngReducer from './originLngReducer';
import destinationLatReducer from './destinationLatReducer';
import destinationLngReducer from './destinationLngReducer';
import coordinatesOriginReducer from './coordinatesOrigin';
import coordinatesDestinationReducer from './coordinatesDestination';

const rootReducer = combineReducers({
  originLat: originLatReducer,
  destinationLat: destinationLatReducer,
  originLng: originLngReducer,
  destinationLng: destinationLngReducer,
  coordinatesOrigin: coordinatesOriginReducer,
  coordinatesDestination: coordinatesDestinationReducer 
});

export default rootReducer;
