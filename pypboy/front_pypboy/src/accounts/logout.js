import React, { Component } from 'react'
import axios from 'axios'

const getLogout = event => {
    event.preventDefault()
    axios({
        url: 'http://localhost:8000/api/auth/logout',
        method: 'POST',
        headers: {
            'Authorization': `Token ${sessionStorage.userToken}`
        },
    })
    .then( res => {
        sessionStorage.removeItem("userToken")
    })
    .catch( error => console.error(error))
}

function Logout()
{
    return (
        <div className="btn btn-danger logout-form" onClick={getLogout}>Log out</div>
    )
}

export default Logout