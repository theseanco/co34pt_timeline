import * as actionTypes from '../actions'

const initialState = {
  playing: false
}

const transportReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case actionTypes.INCREMENT_TRACK:
      console.log("track incremented");
      return state;
    case actionTypes.DECREMENT_TRACK:
      console.log("track decremented");
      return state;
    case actionTypes.RANDOM_TRACK:
      console.log("random track");
      return state;
  }
  return state
}

export default transportReducer;
