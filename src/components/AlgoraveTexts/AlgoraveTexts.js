import React from 'react';
import './AlgoraveTextStyling.css'
import { CSSTransitionGroup } from 'react-transition-group'
import TextTransition from "react-text-transition"

//Texts are passed in from state, and the corresponding text number to be displayed is passed in from state
//This component then displays them in a <p> tag
//pictureNumber, texts, titles and links are all information from the texts.json file
//margins is a classname prop passed in as a string, this is used to control the margins for portrait and landscape versions of the site.

const AlgoraveTexts = ({ pictureNumber, texts, titles, links, margins }) => {

  let titleDisplay = titles[pictureNumber];

  return (
      <div className={`courier `}>
        <div className="f1 b titleMargins">

          <TextTransition
          text={titleDisplay}
        />
        </div>
        <div className={`${margins}`}>
        <p className="algoraveText f4 calisto">{texts[pictureNumber % 1]}</p>
        <p> <a href={links[pictureNumber]}>Download</a> </p>
      </div>
      </div>
      )
}

export default AlgoraveTexts;
