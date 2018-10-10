/*

Todo:

- Checkbox for autoplay

- First set is bugged (Play icon doesn't re-appear once finished, )
- Randomness on shuffle button shouldn't include the already present value

*/

// https://www.npmjs.com/package/react-responsive-carousel
import React, { Component } from "react";
import './appStylesheet.css'
import AlgoraveTexts from './components/AlgoraveTexts/AlgoraveTexts'
import AlgoraveTitles from './components/AlgoraveTitles/AlgoraveTitles'
import SoundPlayer from './components/SoundPlayer/SoundPlayer'
import NavBar from './components/NavBar/NavBar'
import SetCounter from './components/SetCounter/SetCounter'
import PhotoDisplay from './components/PhotoDisplay/PhotoDisplay'
import Overlay from './components/Overlay/Overlay'
import siteData from './siteData/texts_final.json';
import 'tachyons';
import Sound from 'react-sound';
import PlayIcon from './assets/images/icons8-play-50.png'
import PauseIcon from './assets/images/icons8-pause-50.png'
import ShuffleIcon from './assets/images/icons8-shuffle-50.png'
import ForwardIcon from './assets/images/icons8-double-right-filled-50.png'
import CrossIcon from './assets/images/icons8-delete-50.png'
import MediaQuery from 'react-responsive'

//dummy stylesheet for grid testing
import './grid.css'


class App extends Component {

  constructor() {
    super();
    /*
    Guide to state:

    pictureNumber = number of album that is currently playing
    texts = information texts about each album
    titles = title of the set
    images = cover art for the albums
    links = links to each album
    audioState = tracks if an album is playing
    playButtonText = used to control the text of a navigation button (not currently used)
    soundLoading = Used if sound is loading (not currently used)
    firstAlbum = is this the first album of the set? - used to grey out buttons
    lastAlbum = is this the last album of the set? - used to grey out buttons
    */
    this.state = {
      pictureNumber: siteData.images.length-1,
      texts: siteData.texts,
      titles: siteData.names,
      images: siteData.images,
      sounds: siteData.sounds,
      links: siteData.links,
      audioState: Sound.status.STOPPED,
      playButtonText: 'Pause',
      soundLoading: true,
      firstAlbum: false,
      lastAlbum: false,
      orientation: '',
    }
  };

  /*sets picture number, to be referenced by other things*/

  //sets a random picture number
  randomPictureNumber = () => {
    let math = Math.floor(Math.random()*(siteData.images.length));
    this.setState({pictureNumber:math})
  }

  //This uses global variable evilness but I think react-router would help a lot with this maybe.
  openCurrentBandcamp = () => {
    //opens current bandcamp page
    window.open(this.state.links[this.state.pictureNumber])
  }

  decrementCurrentPlaying = () => {
    //ensures negative set numbers are not being read.
    if (this.state.pictureNumber - 1 >= 0) {
      this.setState({pictureNumber:(this.state.pictureNumber - 1)});
    }
  }

  incrementCurrentPlaying = () => {
    //ensures no references outside of the array of current sets
    if (this.state.pictureNumber <= siteData.images.length - 2) {
      this.setState({pictureNumber:(this.state.pictureNumber + 1)})
    }
  }

  //Function which changes the text in play/pause button when pressed
  playPauseButton = () => {
    if (this.state.playButtonText === 'Pause') {
      this.setState({audioState:Sound.status.PAUSED});
      this.setState({playButtonText:'Play'})
    }
    if (this.state.playButtonText === 'Play') {
      this.setState({audioState:Sound.status.PLAYING});
      this.setState({playButtonText:'Pause'})
    }
  }

  soundLoading = () => {
    console.log('loading');
    this.setState({soundLoading:true});
  }

  soundNotLoading = () => {
    console.log('done loading');
    this.setState({soundLoading:false})
  }


  render() {
    //destructuring state
    const {pictureNumber,
      texts,
      titles,
      images,
      sounds,
      links,
      audioState,
      } = this.state;

      let playButton, forwardButton, backButton;

      //conditional statement controlling whether pause or play icon is displayed
      if (audioState === Sound.status.PLAYING) {
        playButton = <img src={PauseIcon} alt="Pause Icon"/>
      } else {
        playButton = <img src={PlayIcon} alt="Play Icon"/>
      }

      if (pictureNumber === 0) {
        backButton = <img src={CrossIcon} alt="Not Available"/>
      } else {
        backButton = <img src={ForwardIcon} className="flipIcon" alt="Older Album" />
      }

      if (pictureNumber === siteData.texts.length-1) {
        forwardButton = <img src={CrossIcon} alt="Not Available"/>
      } else {
        forwardButton = <img src={ForwardIcon} alt="More Recent Album"/>
      }

      return(

        <div className="App">
          <Overlay />
          <MediaQuery orientation="portrait">

            <div className="portrait-container">

              <div className="albumCover">
                <PhotoDisplay images={images} pictureNumber={pictureNumber} />
              </div>

              <div className="navbar portrait-margins">
                <div>
                <NavBar
                          backButton={backButton}
                          forwardButton={forwardButton}
                          shuffleIcon={ShuffleIcon}
                          playButton={playButton}
                          decrement={this.decrementCurrentPlaying}
                          increment={this.incrementCurrentPlaying}
                          play={this.playPauseButton}
                          random={this.randomPictureNumber}
                        />
                </div>
              </div>

              <div className="albumCounter portrait-margins">
                <div>
                <SetCounter number={pictureNumber}  numberOf={siteData.images.length}/>
              </div>
              </div>

              <div className="albumTitle portrait-margins">
                <div>
                <AlgoraveTitles pictureNumber={pictureNumber} titles={titles} />
                </div>
                <AlgoraveTexts pictureNumber={pictureNumber} texts={texts} titles={titles} links={links} margins={"landscape-textMargins"}/>
              </div>

              <div className="albumText portrait-margins">
              </div>
            </div>

          </MediaQuery>


          <MediaQuery orientation="landscape">
            {/* The classes for these containers are in grid.css*/}
            <div className="landscape-container">

              <div className="albumCover">
                <PhotoDisplay images={images} pictureNumber={pictureNumber} />
              </div>

              <div className="navbar">
                <div>
                <NavBar
                          backButton={backButton}
                          forwardButton={forwardButton}
                          shuffleIcon={ShuffleIcon}
                          playButton={playButton}
                          decrement={this.decrementCurrentPlaying}
                          increment={this.incrementCurrentPlaying}
                          play={this.playPauseButton}
                          random={this.randomPictureNumber}
                        />
                </div>
              </div>

              <div className="albumCounter">
                <div>
                <SetCounter number={pictureNumber}  numberOf={siteData.images.length}/>
              </div>
              </div>

              <div className="albumTitle">
                <div>
                <AlgoraveTitles pictureNumber={pictureNumber} titles={titles} />
                </div>
                <AlgoraveTexts pictureNumber={pictureNumber} texts={texts} titles={titles} links={links} margins={"landscape-textMargins"}/>
              </div>

              <div className="albumText">
              </div>
            </div>
          </MediaQuery>

          <SoundPlayer
            sounds={sounds}
            soundNumber={pictureNumber}
            decrementFunction={this.decrementCurrentPlaying}
            audioState={audioState}
            loadFunction={this.soundLoading}
            finishedLoadingFunction={this.soundNotLoading}
          />



</div>
)
}
}

export default App;
