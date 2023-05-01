// destinationReducer.js
const initialState = 36.584673;

const destinationLatReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DESTINATIONLAT':
      return action.payload;
    default:
      return state;
  }
};

export default destinationLatReducer;
