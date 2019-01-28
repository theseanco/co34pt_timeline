import React from 'react';
import './Overlay.css';
import { connect } from 'react-redux';


const componentClasses = ['overlay-styling'];

class IntroModal extends React.Component {

  constructor(props) {
    super(props)
    this.state = {hide: false}
  }

  componentDidUpdate() {
    //eslint-disable-next-line
    history.pushState(null,null,process.env.PUBLIC_URL+'/'+`${this.props.maxNumber}`)
  }

  //Setting up CSS transitions for the overlay, using the class show to push an opacity level to overlay-styling


  render() {

  if (this.state.hide) {componentClasses.push('hide')};

  return (
    <div className={componentClasses.join(' ')}>
    <div className="flexcontainer">
       <div className="overlayText">
       <h1>co34pt Portfolio</h1>

       <p>This app is a player & portfolio showcasing snippets of co34pt live coding sets that have been uploaded to Bandcamp</p>

       <p>co34pt live sets are uploaded to the bandcamp page in full once they are played, serving as an archive. I intended for this archive to serve as a way of tracking how my sets and technique have developed over time, alongside resources such as <a href="https://theseanco.github.io/howto_co34pt_liveCode/">howto_co34pt_liveCode</a>.</p>

       <p>As I have now uploaded in excess of 30 sets, many of which are around 30 minutes, Bandcamp is no longer a good way to survey the existing sets.</p>

       <p>This web app is used to play short snippets of each set uploaded to Bandcamp. The transport controls can be used to choose or shuffle through available sets, and when a set has played, the next oldest set will be played, eventually reaching my first live set.</p>

       <p>Created using <a href="https://reactjs.org/">React</a>, <a href="https://github.com/leoasis/react-sound">react-sound</a> and <a href="https://github.com/contra/react-responsive">MediaQuery</a></p>
      <div className="bottom-alignment">
       <button className="closeButton" onClick={() => {this.setState({hide: true})}}>Close</button>
     </div>
     </div>
     </div>
    </div>
  )
}
}

const mapStateToProps = state => {
  return {
  maxNumber: state.transport.maxNumber
}
}

export default connect(mapStateToProps, null)(IntroModal)
