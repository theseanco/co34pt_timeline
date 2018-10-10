import React from 'react'
import './Overlay.css'


const componentClasses = ['overlay-styling'];

class Overlay extends React.Component {

  constructor(props) {
    super(props),
    this.state = {hide: false}
  }

  //Setting up CSS transitions for the overlay, using the class show to push an opacity level to overlay-styling


  render() {

  if (this.state.hide) {componentClasses.push('hide')};

  return (
    <div className={componentClasses.join(' ')}>
       <h1>co34pt Portfolio</h1>
       <div className="overlayText">

       <p>This app is a player & portfolio showcasing snippets of co34pt live coding sets that have been uploaded to Bandcamp</p>

       <p>co34pt live sets are uploaded to the bandcamp page in full once they are played, serving as an archive. I intended for this archive to serve as a way of tracking how my sets and technique have developed over time, alongside resources such as <a href="https://theseanco.github.io/howto_co34pt_liveCode/">howto_co34pt_liveCode</a>.</p>

       <p>As I have now uploaded in excess of 30 sets, many of which are around 30 minutes, Bandcamp is no longer a good way to survey the existing sets.</p>

       <p>This web app is used to play short snippets of each set uploaded to Bandcamp. The transport controls can be used to choose or shuffle through available sets, and when a set has played, the next oldest set will be played, eventually reaching my first live set.</p>

       <p>Created using Reactjs, MediaQuery and react-sound</p>
     </div>
      <div className="bottom-alignment">
       <a className="closeButton" onClick={() => {this.setState({hide: true})}}>Close</a>
     </div>
    </div>
  )
}
}

export default Overlay
