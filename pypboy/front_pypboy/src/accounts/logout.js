import React, { useState } from 'react'
import axios from 'axios'


function Logout(props)
{
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
            props.setToken('')
        })
        .catch( error => console.error(error))
    }
    return (
        <button onClick={getLogout}>Logout</button>
    )
}

export default Logout