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

  onSubmit = e => {
    // preventdefault empeche une bad request.... pourquoi ??
    e.preventDefault()
    this.login()
  }

  render() {
    const { username, password } = this.state.credentials
    return (
      <div className="d-flex justify-content-center mt-5">
        <div className="col-md-6 m-auto" style={{visibility: this.props.hidden, position: "absolute"}} >
          <div className="card card-body mt-5">
            <h2 className="text-center">Login</h2>
            <form
            action="http://localhost:8000/auth/"
            onSubmit={this.onSubmit}
            method="POST">
              <div className="form-group">
                <label>Username</label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  onChange={this.inputChanged}
                  value={username}
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  onChange={this.inputChanged}
                  value={password}
                />
              </div>

              <div className="form-group">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
              <p>
                Don't have an account?
              </p>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
