// veri1Reducer.js
const initialState = 28.7300323;

const originLngReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ORIGINLNG':
      return action.payload;
    default:
      return state;
  }
};

export default originLngReducer;
