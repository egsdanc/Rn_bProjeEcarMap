const initialState = 39.9333635

  const coordinatesOriginReducer= (state = initialState, action) => {
    switch (action.type) {
      case 'SET_COORDINATESORIGIN':
        return action.payload;
      default:
        return state;
    }
  };

  export default coordinatesOriginReducer;
