import React, {Component} from 'react';
import { connect } from 'react-redux';
import './AlgoraveTitlesStyling.css'

//Texts are passed in from state, and the corresponding text number to be displayed is passed in from state
//This component then displays them in a <p> tag
//pictureNumber, texts, titles and links are all information from the texts.json file
//margins is a classname prop passed in as a string, this is used to control the margins for portrait and landscape versions of the site.

class AlgoraveTitles extends Component {

  render () {

    const {pictureNumber, titles} = this.props
  let titleDisplay = titles[pictureNumber];

  return (
      <div className={`courier `}>
        <div className="f1 b">
            {titleDisplay}
        </div>
      </div>
      )
}
}

const mapStateToProps = state => {
  return {
    pictureNumber: state.transport.number,
    titles: state.data.titles
  }
}

export default connect(mapStateToProps,null)(AlgoraveTitles);
