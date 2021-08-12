import React, { Component } from 'react'
import axios from 'axios'
import socket from "../chat/Socket"

class Register extends Component {
    state = {
      credentials: { username: '', password: '', email: '' }
    }

    register = event => {
      event.preventDefault()
      axios({
        url: 'http://localhost:8000/api/auth/register',
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        data: JSON.stringify(this.state.credentials)
      })
      .then(
        response => {
          this.props.userLogin(response.data.token)
          this.props.setVisibility('hidden')
          sessionStorage.setItem(
            "userToken",
            response.data.token
          )
          sessionStorage.setItem(
            "username",
            this.state.credentials.username
          )
          socket.emit("username", sessionStorage.username)
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
      const { username, password, email } = this.state.credentials
      return (
        <div className="d-flex justify-content-center mt-5">
          <div className="col-md-6 m-auto" style={{visibility: this.props.visibility, position: "absolute", zIndex:10}} >
            <div className="card card-body mt-5">
              <h2 className="text-center">Register</h2>
              <form
              action="http://localhost:8000/api/auth/register"
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
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    onChange={this.inputChanged}
                    value={email}
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
                <div className="form-group mt-2">
                  <button onClick={this.register} className="btn btn-primary mx-2">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )
    }
  }
  
  export default Register