import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PhotoDisplay.css';
import ReactCSSTransitionReplace from 'react-css-transition-replace';
//sourced from here: https://codepen.io/jjmartucci/pen/avqPBW

/*

A simple component that renders a navbar based on provided characteristics

This takes a lot of props, and can probably be made simpler

But i don't quite know how

*/

//function to import all, used with require.context to import directories

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

//import all images
const imageUrls = importAll(require.context('../../assets/images/albumCovers', false, /\.(png|jpg|svg)$/));
console.log(Object.keys(imageUrls));

class PhotoDisplay extends Component {

  render() {
    const {
      images,
      pictureNumber,
    } = this.props;

  // let imagesrc = require(`../../assets/images/${images[pictureNumber]}`);
  // let imagesrc = `https://raw.githubusercontent.com/theseanco/co34pt_timeline/master/covers-cropped/cover${pictureNumber}.jpg`;
 let divStyle = {backgroundImage: `url(${images[2]})`};

  return (
         <div className="imageDiv">
         //next job is to run a map function over all of the images available. 
          <img src={imageUrls['cover1.jpg']} />
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
