import React, { Component } from 'react'
import axios from 'axios'

class Login extends Component {

  state = {
    credentials: {username: '', password: ''}
  }

  login = event => {
    axios({
      url: 'http://localhost:8000/auth/',
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      data: JSON.stringify(this.state.credentials)
    })
    .then(
      response => {
        this.props.userLogin(response.data.token)
        console.log(response.data.token)
      }
    )
    .catch( error => console.error(error))
  }

  register = event => {
    axios({
      url: 'http://localhost:8000/api/users/',
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      data: JSON.stringify(this.state.credentials)
    })
    .then(
      response => {
        console.log(response.data.token)
      }
    )
    .catch( error => console.error(error))
  }

  inputChanged = event => {
    const cred = this.state.credentials
    cred[event.target.name] = event.target.value
    this.setState({credentials: cred})
  }

  render() {
    return (
      <>
        <h1>Login user form</h1>
        <label>
          Username :
          <input type="text" name="username"
            value={this.state.credentials.username}
            onChange={this.inputChanged} />
        </label>
        <br/>
        <label>
          Password :
          <input type="password" name="password"
            value={this.state.credentials.password}
            onChange={this.inputChanged} />
        </label>
        <button onClick={this.login}>Login</button>
        <button onClick={this.register}>Register</button>
      </>
    )
  }
}

export default Login
