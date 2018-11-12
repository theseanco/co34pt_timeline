/*

Todo:

- This branch: Transition between images, text and titles.

- Checkbox for autoplay
- Add bottom bar
- Add a visualiser?

ROUTING:
- Push URL of current album after IntroModal is closed

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
          <Route path="/" exact render={props => (
            <div>
            <IntroModal />
            <Player {...props}/>
            </div>
          )
          }
          // component={Player}
           />
          <Route path="/:id" component={Player} />
          </Switch>
          </div>
        </Router>

          )
}
}

export default App;
