import React, { Component } from 'react';
import {connect} from 'react-redux';
import PlayIcon from '../../assets/images/icons8-play-50.png';
import PauseIcon from '../../assets/images/icons8-pause-50.png';
import ForwardButton from '../../assets/images/icons8-double-right-filled-50.png';
import ShuffleIcon from '../../assets/images/icons8-shuffle-50.png';

import * as actionTypes from '../../store/actions'


/*

A simple component that renders a navbar based on provided characteristics

This takes a lot of props, and can probably be made simpler

*/

// const NavBar = ({ playButton, forwardButton, backButton, shuffleIcon, decrement, play, increment, random}) => {
class NavBar extends Component {

  render() {
    const {backButton,
      decrementTrack,
      randomTrack,
      incrementTrack,
      pause,
      playing,
      play} = this.props;

      const forwardButton = <img src={ForwardButton} alt="forward/back" />;
      const playButton = <img src={PlayIcon} alt="Play" />;
      const pauseButton = <img src={PauseIcon} alt="Pause" />;
      const shuffleIcon = <img src={ShuffleIcon} alt="shuffle" />

  return (
      <div>
          <span className="flipIcon" onClick={decrementTrack}>{backButton}</span>
          <span onClick={() => {playing ? pause() : play()}}>
          {
            playing ?
            pauseButton :
            playButton
          }
          </span>
          <span onClick={incrementTrack}>{forwardButton}</span>
          <span onClick={randomTrack}>{shuffleIcon}</span>
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

const mapStateToProps = state => {
  return {
    playing: state.pausePlay.playing
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(NavBar);
