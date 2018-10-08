import React from 'react';
import Sound from 'react-sound'

//Texts are passed in from state, and the corresponding text number to be displayed is passed in from state
//This component then displays them in a <p> tag

const SoundPlayer = ({ sounds, soundNumber, decrementFunction, audioState, loadFunction, finishedLoadingFunction }) => {

  //a function to trigger the decrementing function when a track is finished playing
const finishFunction = () => {
  //this may not be necessary
  this.handleSongFinishedPlaying;
  //go backwards
  decrementFunction();
}

  return (
    <div>
      <Sound
        url={`https://raw.githubusercontent.com/theseanco/co34pt_timeline/master/trimmed_sets/${sounds[soundNumber]}`}
        playStatus={audioState}
        playFromPosition={0 /* in milliseconds */}
        onLoading={this.handleSongLoading}
        onPlaying={this.handleSongPlaying}
        onFinishedPlaying={finishFunction}
        volume={1}
        onLoading={loadFunction}
        onLoad={finishedLoadingFunction}
      />
    </div>
      )
}

export default SoundPlayer;
