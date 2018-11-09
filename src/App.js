/*

Todo:

- This branch: Transition between images, text and titles.

- Checkbox for autoplay
- Add bottom bar
- Add a visualiser?

ROUTING:
- Add function to Redux which feeds an album number in as a payload
- Programmatically generate routing and paths for all albums
- Increment/decrement buttons change both URL and props
- URLs in bounds return the correct album
- URLs out of bounds either return a 404 or move to the most recent album

*/

// https://www.npmjs.com/package/react-responsive-carousel
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './appStylesheet.css'
import IntroModal from './components/Overlay/Overlay'
import 'tachyons';
import Player from './containers/Player/player'



class App extends Component {

  render() {
      return(
        <Router>
        <div>
          <Switch>
          <Route path="/" exact render={(props) => (
            <div>
            <IntroModal />
            <Player />
            </div>
          )
          } />
          <Route path="/:id" component={Player} />
          </Switch>
          </div>
        </Router>

          )
}
}

export default App;
