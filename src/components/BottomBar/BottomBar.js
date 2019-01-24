import React from 'react';
import './BottomBarStyling.css'

const BottomBar = () => {
  return (
    <div className="bottom-bar">
      <a href="https://co34pt.bandcamp.com/" className="fab fa-bandcamp"><span>Go to bandcamp</span></a>
      <a href="https://soundcloud.com/co-3-4-pt" className="fab fa-soundcloud"><span>Go to Soundcloud</span></a>
      <a href="https://github.com/theseanco" className="fab fa-github"><span>Go to GitHub</span></a>
      <a href="https://www.linkedin.com/in/seancotterill/" className="fab fa-linkedin"><span>Go to LinkedIn</span></a>
      <a href="https://angel.co/sean-cotterill" className="fab fa-angellist"><span>Go to Angellist</span></a>
      <a href="https://twitter.com/theseanco" className="fab fa-twitter"><span>Go to Twitter</span></a>
    </div>
  )
}

export default BottomBar;
