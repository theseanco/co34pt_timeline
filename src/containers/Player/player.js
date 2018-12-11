import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../appStylesheet.css';
import AlgoraveLinks from '../../components/AlgoraveLinks/AlgoraveLinks';
import AlgoraveTitles from '../../components/AlgoraveTitles/AlgoraveTitles';
import SoundPlayer from '../../components/SoundPlayer/SoundPlayer';
import NavBar from '../../components/NavBar/NavBar';
import SetCounter from '../../components/SetCounter/SetCounter';
import PhotoDisplay from '../../components/PhotoDisplay/PhotoDisplay';
import 'tachyons';
import MediaQuery from 'react-responsive';
import BottomBar from '../../components/BottomBar/BottomBar';
import * as actionTypes from '../../store/actions';



class Player extends Component {


  componentDidMount() {
      //strip non-numeric characters from path
      const pathName = Number(this.props.location.pathname.replace(/\D/g,''));
      //fire redux function if it's within bounds.
      if (pathName >= 1 && pathName <= this.props.maxNumber) {
      this.props.switchTrack(pathName-1);
      }
    }

  componentDidUpdate() {
    console.log("updated! Number", this.props.number);
    //eslint-disable-next-line
    history.pushState(null,null,'/'+`${this.props.number+1}`)
  }

  render() {
      return(
        <div className="App">
          <MediaQuery orientation="portrait">
            <div className="portrait-container">
              <div className="albumCover">
                <PhotoDisplay />
              </div>

              <div className="navbar portrait-margins">
                <div >
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

              <BottomBar />
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
                <BottomBar />
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

const mapStateToProps = state => {
  return {
    number: state.transport.number,
    maxNumber: state.transport.maxNumber
  }
}

const mapDispatchToProps = dispatch => {
  return {
    switchTrack: (result) => dispatch({type:actionTypes.SELECT_TRACK, value: result})
  }
}

  export default connect(mapStateToProps,mapDispatchToProps)(Player);
