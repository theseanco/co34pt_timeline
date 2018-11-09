import React, { Component } from 'react'
import '../../appStylesheet.css'
import AlgoraveLinks from '../../components/AlgoraveLinks/AlgoraveLinks'
import AlgoraveTitles from '../../components/AlgoraveTitles/AlgoraveTitles'
import SoundPlayer from '../../components/SoundPlayer/SoundPlayer'
import NavBar from '../../components/NavBar/NavBar'
import SetCounter from '../../components/SetCounter/SetCounter'
import PhotoDisplay from '../../components/PhotoDisplay/PhotoDisplay'
import IntroModal from '../../components/Overlay/Overlay'
import 'tachyons';
import MediaQuery from 'react-responsive'



class Player extends Component {

  render() {
      return(
        <div className="App">
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

export default Player;
