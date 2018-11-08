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
      pictureNumber: siteData.images.length-1,
      texts: siteData.texts,
      titles: siteData.names,
      images: siteData.images,
      sounds: siteData.sounds,
      links: siteData.links,
      audioState: Sound.status.STOPPED,
      soundLoading: true,
      orientation: '',
    }
  };

  //This uses global variable evilness but I think react-router would help a lot with this maybe.
  openCurrentBandcamp = () => {
    //opens current bandcamp page
    window.open(this.state.links[this.state.pictureNumber])
  }

  pauseSound = () => {
    this.setState({audioState:Sound.status.PAUSED});
      this.setState({playButtonText:'Play'})
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

      return(

        <div className="App">
          <IntroModal />
          <MediaQuery orientation="portrait">

            <div className="portrait-container">

              <div className="albumCover">
                <PhotoDisplay images={images} pictureNumber={pictureNumber} />
              </div>

              <div className="navbar portrait-margins">
                <div>
                <NavBar/>
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
                <AlgoraveLinks pictureNumber={pictureNumber} texts={texts} titles={titles} links={links} margins={"landscape-textMargins"}/>
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
                <NavBar/>
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
                <AlgoraveLinks pictureNumber={pictureNumber} texts={texts} titles={titles} links={links} margins={"landscape-textMargins"}/>
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
            endingFunction={this.pauseSound}
          />



</div>
)
}
}

export default App;
