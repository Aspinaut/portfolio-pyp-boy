import React, { useState } from 'react'
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
        sessionStorage.removeItem("username")
    })
    .catch( error => console.error(error))
}

function Logout()
{
    return (
        <button onClick={getLogout}>Logout</button>
    )
}

export default Logout