
import React from 'react';
import './SetCounterStyling.css'

/*

A component that shows a counter of the sets that are being played

*/

const SetCounter = ({ number, numberOf }) => {
  return (
      <div>
        <p className="calisto f4 countermargin-portrait">{`${number+1} of ${numberOf}`}</p>
      </div>
      )
}

export default SetCounter;
