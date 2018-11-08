/*

Todo:

REDUX:

- Load all site data into Redux store
- Use site data to:
  - Display image
  - Album Text
  - Load Bandcamp
  - Play Sound

- This branch: Transition between images, text and titles.

- Checkbox for autoplay
- Add bottom bar
- Add a visualiser?



*/

// https://www.npmjs.com/package/react-responsive-carousel
import React, { Component } from "react";
import './appStylesheet.css'
import AlgoraveLinks from './components/AlgoraveLinks/AlgoraveLinks'
import AlgoraveTitles from './components/AlgoraveTitles/AlgoraveTitles'
import SoundPlayer from './components/SoundPlayer/SoundPlayer'
import NavBar from './components/NavBar/NavBar'
import SetCounter from './components/SetCounter/SetCounter'
import PhotoDisplay from './components/PhotoDisplay/PhotoDisplay'
import IntroModal from './components/Overlay/Overlay'
import siteData from './siteData/texts_final.json';
import 'tachyons';
import Sound from 'react-sound';
import MediaQuery from 'react-responsive'



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
      sounds: siteData.sounds,
      audioState: Sound.status.STOPPED
    }
  };

  render() {
      return(
        <div className="App">
          <IntroModal />
          <MediaQuery orientation="portrait">

            <div className="portrait-container">

              <div className="albumCover">
                <PhotoDisplay />
              </div>

              <div className="navbar portrait-margins">
                <div>
                <NavBar/>
                </div>
              </div>

              <div className="albumCounter portrait-margins">
                <div>
                <SetCounter />
              </div>
              </div>

              <div className="albumTitle portrait-margins">
                <div>
                <AlgoraveTitles />
                </div>
                <AlgoraveLinks  margins={"landscape-textMargins"}/>
              </div>

              <div className="albumText portrait-margins">
              </div>
            </div>

          </MediaQuery>


          <MediaQuery orientation="landscape">
            {/* The classes for these containers are in grid.css*/}
            <div className="landscape-container">

              <div className="albumCover">
                <PhotoDisplay />
              </div>

              <div className="navbar">
                <div>
                <NavBar/>
                </div>
              </div>

              <div className="albumCounter">
                <div>
                <SetCounter />
              </div>
              </div>

              <div className="albumTitle">
                <div>
                <AlgoraveTitles />
                </div>
                <AlgoraveLinks margins={"landscape-textMargins"}/>
              </div>

              <div className="albumText">
              </div>
            </div>
          </MediaQuery>

          <SoundPlayer/>



</div>
)
}
}

export default App;
