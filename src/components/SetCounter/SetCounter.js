import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SetCounterStyling.css'

/*

A component that shows a counter of the sets that are being played

*/

class SetCounter extends Component {
  render () {
    const {pictureNumber, numberOf} = this.props;

  return (
        <div className="calisto f4 countermargin-portrait">{`${pictureNumber+1} of ${numberOf}`}</div>
      )
}
}

const mapStateToProps = state => {
  return {
    pictureNumber: state.transport.number
  }
}


export default connect(mapStateToProps, null)(SetCounter);
