import * as actionTypes from '../actions'


//TODO: Conditional Statement based on audioState: true/false PLAYING STOPPED
const initialState = {
  playing: false
}

const pausePlayReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case actionTypes.PAUSE:
      console.log("paused")
      return {
        ...state,
        playing: false
      }
    case actionTypes.PLAY:
      console.log("playing")
      return {
        ...state,
        playing: true
      }
    default:
      return state
  }
  return state
}

export default pausePlayReducer;
