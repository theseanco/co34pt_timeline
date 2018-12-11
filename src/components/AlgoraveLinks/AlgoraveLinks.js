import React, { Component } from 'react';
import { connect } from 'react-redux';
import './AlgoraveTextStyling.css';

//Texts are passed in from state, and the corresponding text number to be displayed is passed in from state
//This component then displays them in a <p> tag
//pictureNumber, texts, titles and links are all information from the texts.json file
//margins is a classname prop passed in as a string, this is used to control the margins for portrait and landscape versions of the site.


//REDUX THIS.

class AlgoraveLinks extends Component {

  render() {
    const {
      links,
      pictureNumber
    } = this.props

  return (
      <div className={`courier `}>
        <a href={links[pictureNumber]}>Full Set</a>
      </div>
      )
}
}

const mapStateToProps = state => {
  return {
    pictureNumber: state.transport.number,
    links: state.data.links
  }
}

export default connect(mapStateToProps,null)(AlgoraveLinks);
