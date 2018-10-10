import React from 'react';

/*

A simple component that renders a navbar based on provided characteristics

This takes a lot of props, and can probably be made simpler

*/

const NavBar = ({ playButton, forwardButton, backButton, shuffleIcon, decrement, play, increment, random}) => {
  return (
      <div>
          <span className="flipIcon" onClick={decrement}>{backButton}</span>
          <span onClick={play}>{playButton}</span>
          <span onClick={increment}>{forwardButton}</span>
          <img src={shuffleIcon} onClick={random} alt="Shuffle"></img>
      </div>
      )
}

export default NavBar;
