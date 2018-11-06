import React, { Component } from 'react';
import {connect} from 'react-redux';

import * as actionTypes from '../../store/actions'


/*

A simple component that renders a navbar based on provided characteristics

This takes a lot of props, and can probably be made simpler

*/

// const NavBar = ({ playButton, forwardButton, backButton, shuffleIcon, decrement, play, increment, random}) => {
class NavBar extends Component {

  render() {
    const {backButton,
      playButton,
      forwardButton,
      shuffleIcon,
      decrementTrack,
      randomTrack,
      incrementTrack,
      pause,
      play} = this.props;

  return (
            <div>
          <span className="flipIcon" onClick={decrementTrack}>{backButton}</span>
          <span onClick={play}>{playButton}</span>
          <span onClick={incrementTrack}>{forwardButton}</span>
          <img src={shuffleIcon} onClick={randomTrack} alt="Shuffle"></img>
      </div>
      )
}
}

const mapDispatchToProps = dispatch => {
  return {
    incrementTrack: () => dispatch({type:actionTypes.INCREMENT_TRACK}),
    decrementTrack: () => dispatch({type:actionTypes.DECREMENT_TRACK}),
    randomTrack: () => dispatch({type:actionTypes.RANDOM_TRACK}),
    pause: () => dispatch({type:actionTypes.PAUSE}),
    play: () => dispatch({type:actionTypes.PLAY})
  }
}

export default connect(null,mapDispatchToProps)(NavBar);
