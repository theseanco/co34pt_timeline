import * as actionTypes from '../actions'
import siteData from '../../siteData/texts_final.json'

//Number is the current album
//minlimit and maxlimit track whether we are at the outer bounds,
//maxLimit
const initialState = {
  number: siteData.images.length-1,
  maxLimit: true,
  minLimit: false,
}

const maxNumber = siteData.images.length-1

const transportReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case actionTypes.INCREMENT_TRACK:
      console.log(state.number);
      return {
        ...state,
        number: state.number + 1
      }
    case actionTypes.DECREMENT_TRACK:
          console.log(state.number);
      return {
        ...state,
        number: state.number - 1
      }
    case actionTypes.RANDOM_TRACK:
          console.log(state.number);

      return {
        ...state,
        number: Math.floor(Math.random()*(siteData.images.length))
      }
  }
  return state
}

export default transportReducer;
