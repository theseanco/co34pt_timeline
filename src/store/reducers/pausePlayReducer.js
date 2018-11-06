import * as actionTypes from '../actions'

const initialState = {
  playing: false
}

const pausePlayReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case actionTypes.PAUSE:
      console.log("track paused");
      return state;
    case actionTypes.PLAY:
      console.log("track playing");
      return state;
  }
  return state
}

export default pausePlayReducer;
