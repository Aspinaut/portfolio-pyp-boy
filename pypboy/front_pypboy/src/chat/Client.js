import "bootstrap/dist/css/bootstrap.css"
import React from "react"
import { useEffect, useState } from "react"
import moment from "moment"
import socket from "./Socket"


const Client = () => {
  const [users, setUsers] = useState([])
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([])

  useEffect(() => {
    socket.on("connect", username => {
      if (sessionStorage.username)
        username = sessionStorage.username
      else
        username = 'anon'
      socket.emit("username", username)
    })

    socket.on("users", users => {
      setUsers(users)
    })

    socket.on("message", message => {
      setMessages(messages => [...messages, message])
    })

    socket.on("connected", user => {
      setUsers(users => [...users, user])
    })

    socket.on("disconnected", id => {
      setUsers(users => {
        return users.filter(user => user.id !== id)
      })
    })
  }, [])

  const submit = event => {
    event.preventDefault()
    socket.emit("send", message)
    setMessage("")
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <h6>Messages</h6>
          <div id="messages">
            {messages.map(({ user, date, text }, index) => (
              <div key={index} className="row mb-2">
                <div className="col-md-3">
                  {moment(date).format("h:mm:ss a")}
                </div>
                <div className="col-md-2">{user.name}</div>
                <div className="col-md-2">{text}</div>
              </div>
            ))}
          </div>
          <form onSubmit={submit} id="form">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                onChange={e => setMessage(e.currentTarget.value)}
                value={message}
                id="text"
              />
              <span className="input-group-btn">
                <button id="submit" type="submit" className="btn btn-primary">
                  Send
                </button>
              </span>
            </div>
          </form>
        </div>
        <div className="col-md-4">
          <h6>Users</h6>
          <ul id="users">
            {users.map(({ name, id }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Client
