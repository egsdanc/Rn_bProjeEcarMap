// veri2Reducer.js
const initialState = 36.1756161;

const destinationLngReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DESTINATIONLNG':
      return action.payload;
    default:
      return state;
  }
};

export default destinationLngReducer;
