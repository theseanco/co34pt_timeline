import React from 'react';
import './PhotoDisplay.css'
//sourced from here: https://codepen.io/jjmartucci/pen/avqPBW
import { CSSTransitionGroup } from 'react-transition-group'

/*

A simple component that renders a navbar based on provided characteristics

This takes a lot of props, and can probably be made simpler

But i don't quite know how

*/

const PhotoDisplay = ({ images, pictureNumber, orientation }) => {

    let imagesrc = require(`../../assets/images/${images[pictureNumber]}`);
//  let imagesrc = `https://raw.githubusercontent.com/theseanco/co34pt_timeline/master/covers-cropped/cover${pictureNumber}.jpg`;
  let divStyle = {backgroundImage: `url(${imagesrc})`};
  let transition= 'scale';
  let appearTransition = 'true';

  return (


    <CSSTransitionGroup transitionName="example">
            <div className={`imageDiv_${orientation}`} style={divStyle}></div>
      </CSSTransitionGroup>
      )
}

export default PhotoDisplay;
