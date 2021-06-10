import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import './assets/css/App.css'
import Home from './Home'
import GameMenu from './GameMenu'
import NavbarTop from './NavbarTop'
import War from './games/War'
import CorsicanWar from './games/CorsicanWar'

function NoPageFound() {
  return (
    <h3>404 - Page Not Found</h3>
  )
}

function App() {
  return (
    <div className="App">
      <Router >
        <NavbarTop />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/play">
            <GameMenu />
          </Route>
          <Route path="/play/war">
            <War/>
          </Route>
          <Route path="/play/corsicanwar">
            <CorsicanWar/>
          </Route>
          <Route component={NoPageFound}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App
