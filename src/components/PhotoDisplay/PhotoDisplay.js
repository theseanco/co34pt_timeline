import React, { Component } from 'react';
import { connect } from 'react-redux';
import CrossfadeImage from 'react-crossfade-image'
import './PhotoDisplay.css';
import ReactCSSTransitionReplace from 'react-css-transition-replace';
//sourced from here: https://codepen.io/jjmartucci/pen/avqPBW

/*

A simple component that renders a navbar based on provided characteristics

This takes a lot of props, and can probably be made simpler

But i don't quite know how

*/

class PhotoDisplay extends Component {

  render() {
    const {
      images,
      pictureNumber,
    } = this.props;

  let imagesrc = require(`../../assets/images/${images[pictureNumber]}`);
  // let imagesrc = `https://raw.githubusercontent.com/theseanco/co34pt_timeline/master/covers-cropped/cover${pictureNumber}.jpg`;
  let divStyle = {backgroundImage: `url(${imagesrc})`};

  return (
        <div className="imageDiv" style={divStyle}>
        </div>
      )
}
}

const mapStateToProps = state => {
  return {
    pictureNumber: state.transport.number,
    images: state.data.images
  }
}

export default connect(mapStateToProps,null)(PhotoDisplay);
