import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PhotoDisplay.css';
//sourced from here: https://codepen.io/jjmartucci/pen/avqPBW

/*

A simple component that renders a navbar based on provided characteristics

This takes a lot of props, and can probably be made simpler

But i don't quite know how

*/

//function to import all, used with require.context to import directories
//imports all pieces as an object
function importAll(r) {
    let images = {}
    //eslint-disable-next-line
    r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
    return images;
}

//import all images
const imageUrls = importAll(require.context('../../assets/images/albumCovers', false, /\.(png|jpg|svg)$/));

class PhotoDisplay extends Component {

  render() {
    const {
      pictureNumber
    } = this.props;

  return (
         <div className="imageDiv">
          {
            Object.keys(imageUrls).map((item, index) => {
              let computedClass = index === pictureNumber ? 'slide active' : 'slide';
              return <div className={computedClass} key={index}> <img className="imageScaling" src={imageUrls[`cover${index+1}.jpg`]} alt="Album Cover" /></div>
            })
          }
         </div>
      )
}
}

const mapStateToProps = state => {
  return {
    pictureNumber: state.transport.number
  }
}

export default connect(mapStateToProps,null)(PhotoDisplay);
