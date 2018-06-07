import React, { PureComponent } from 'react'
import ReactGA from 'react-ga';
import { Router, Route, Redirect } from 'react-router-dom'
import StartGame from './components/StartGame'
import Game from './components/Game'
import Store from './store.js'

import { createBrowserHistory, createHashHistory } from 'history'



ReactGA.initialize('UA-51358691-2');

function configureHistory() {
  if(window.matchMedia('(display-mode: standalone)').matches) {
    console.log("We are in home screen");
    return createHashHistory()
  } else {
    console.log("We are in regular browser");
    return createBrowserHistory()
  }
}
const history = configureHistory()

history.listen((location, action) => {
  ReactGA.pageview(location.pathname);
});

class App extends PureComponent {
  render() {
    return (
      <Router history={history}>
        <div>
          <nav>

          </nav>
          <main>
            <Route exact path="/game" component={Game}/>
            <Route exact path="/home" component={StartGame}/>
            <Route exact path="/" render={ () => <Redirect to="/home" /> } />
          </main>
        </div>
      </Router>
    )
  }
}
export default App
