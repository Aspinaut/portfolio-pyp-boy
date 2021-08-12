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
import Users from './Users'
import GameMenu from './GameMenu'
import NavbarTop from './NavbarTop'
import War from './games/War/War'
import Snake from './games/Snake/Snake'
import CorsicanWar from './games/CorsicanWar/CorsicanWar'
import Client from './chat/Client.js'

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
          <Route path="/play/snake">
            <Snake/>
          </Route>
          <Route path="/users">
            <Users/>
          </Route>
          <Route component={NoPageFound}/>
        </Switch>
      </Router>
      <Client></Client>
    </div>
  )
}

export default App
