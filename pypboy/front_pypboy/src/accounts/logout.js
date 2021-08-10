import React, { Component } from 'react'
import axios from 'axios'

const logout = event => {
    event.preventDefault()
    axios({
        url: 'http://localhost:8000/auth/logout/',
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
    })
    .then(
        response => {
        console.log("token destroyed")
        }
    )
    .catch( error => console.error(error))
}

function LogoutButton()
{
    return (
        <div className="btn btn-danger logout-form" onClick={logout}>Log out</div>
    )
}

export default LogoutButton