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
import Game from './Game'
import NavbarTop from './NavbarTop'

function App() {
  return (
    <div className="App">
      <Router >
        <NavbarTop />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/play">
            <Game />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
