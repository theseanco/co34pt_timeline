import React from 'react';
import './AlgoraveTitlesStyling.css'
import TextTransition from "react-text-transition"

//Texts are passed in from state, and the corresponding text number to be displayed is passed in from state
//This component then displays them in a <p> tag
//pictureNumber, texts, titles and links are all information from the texts.json file
//margins is a classname prop passed in as a string, this is used to control the margins for portrait and landscape versions of the site.

const AlgoraveTitles = ({ pictureNumber, titles}) => {

  let titleDisplay = titles[pictureNumber];

  return (
      <div className={`courier `}>
        <div className="f1 b">
            {titleDisplay}
        </div>
      </div>
      )
}

export default AlgoraveTitles;
