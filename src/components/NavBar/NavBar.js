import React, { Component } from 'react';
import {connect} from 'react-redux';
import './NavBar.css';
import PlayIcon from '../../assets/images/icons8-play-50.png';
import PauseIcon from '../../assets/images/icons8-pause-50.png';
import ForwardIcon from '../../assets/images/icons8-double-right-filled-50.png';
import ShuffleIcon from '../../assets/images/icons8-shuffle-50.png';
import CrossIcon from '../../assets/images/icons8-delete-50.png';

import * as actionTypes from '../../store/actions'


/*

A simple component that renders a navbar based on provided characteristics

This takes a lot of props, and can probably be made simpler

*/

// const NavBar = ({ playButton, forwardButton, backButton, shuffleIcon, decrement, play, increment, random}) => {
class NavBar extends Component {

  render() {
    const {
      decrementTrack,
      randomTrack,
      maxNumber,
      pictureNumber,
      incrementTrack,
      pause,
      playing,
      play} = this.props;

      const forwardButton = <img src={ForwardIcon} alt="forward/back" />;
      const backButton = <img src={ForwardIcon} className="flipIcon" alt="forward/back" />;
      const playButton = <img src={PlayIcon} alt="Play" />;
      const pauseButton = <img src={PauseIcon} alt="Pause" />;
      const shuffleButton = <img src={ShuffleIcon} alt="shuffle" />
      const crossButton = <img src={CrossIcon} alt="Not Available" />

  return (
      <div>
          <span
          onClick={() => {if(pictureNumber !== 0) {decrementTrack()}}}>
          {pictureNumber !== 0 ? backButton : crossButton}
          </span>

          <span onClick={() => {playing ? pause() : play()}}>
          {playing ? pauseButton : playButton}
          </span>

          <span onClick={() => {if(pictureNumber !== maxNumber){incrementTrack()}}}>
          {pictureNumber !== maxNumber ? forwardButton : crossButton}
          </span>

          <span onClick={randomTrack}>{shuffleButton}</span>
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
    play: () => dispatch({type:actionTypes.PLAY}),
    switchTrack: (result) => dispatch({type: actionTypes.SELECT_TRACK, value: result})
  }
}

const mapStateToProps = state => {
  return {
    playing: state.pausePlay.playing,
    pictureNumber: state.transport.number,
    maxNumber: state.transport.maxNumber
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(NavBar);
