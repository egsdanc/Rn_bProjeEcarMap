const initialState = 32.8597419

  const coordinatesDestinationReducer= (state = initialState, action) => {
    switch (action.type) {
      case 'SET_COORDINATESDESTINATION':
        return action.payload;
      default:
        return state;
    }
  };

  export default coordinatesDestinationReducer;
