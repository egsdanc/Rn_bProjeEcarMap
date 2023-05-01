// originReducer.js
const initialState = 41.2767886;

const originLatReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ORIGINLAT':
      return action.payload;
    default:
      return state;
  }
};

export default originLatReducer;
