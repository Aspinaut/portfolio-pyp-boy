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
import War from './games/War/War'
import Snake from './games/Snake/Snake'
import CorsicanWar from './games/CorsicanWar/CorsicanWar'
import Register from './accounts/Register'
import Login from './accounts/Login'
import { Provider } from 'react-redux'
import store from './accounts/store'

function NoPageFound() {
  return (
    <h3>404 - Page Not Found</h3>
  )
}

function App() {
  return (
    <div className="App">
      <Provider store={store}>
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
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route component={NoPageFound}/>
          </Switch>
        </Router>
      </Provider >
    </div>
  )
}

export default App
