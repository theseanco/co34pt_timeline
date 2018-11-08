import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions'
import Sound from 'react-sound';

//Texts are passed in from state, and the corresponding text number to be displayed is passed in from state
//This component then displays them in a <p> tag

class SoundPlayer extends Component {

  render() {
  const {
    //REDUX
    decrementTrack,
    playing,
    sounds,
    soundNumber,
  } = this.props

  return (
    <div>
      <Sound
        url={`https://raw.githubusercontent.com/theseanco/co34pt_timeline/master/trimmed_sets/${sounds[soundNumber]}`}
        playStatus={playing ? Sound.status.PLAYING : Sound.status.PAUSED}
        playFromPosition={0 /* in milliseconds */}
        onLoading={this.handleSongLoading}
        onPlaying={this.handleSongPlaying}
        onFinishedPlaying={() => {if(soundNumber !== 0) {decrementTrack()}}}
        volume={90}
      />
    </div>
      )
}}

const mapDispatchToProps = dispatch => {
  return {
    decrementTrack: () => dispatch({type:actionTypes.DECREMENT_TRACK})
  }
}

const mapStateToProps = state => {
  return {
    soundNumber: state.transport.number,
    sounds: state.data.sounds,
    playing: state.pausePlay.playing
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SoundPlayer);
