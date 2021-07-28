import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Users()
{
    const [usersList, getUsersList] = useState([{id:'', username: '', email: ''}, {id:'', username: '', email: ''}])
    let users = []
    let options = {
        method: "GET",
        url: 'http://localhost:8000/api/users/'   
    }

    useEffect(() => {
        axios(options)
        .then(response => {
            users = response.data
            getUsersList(users)
        })
        .catch(error => console.error(error))
    }, [users])
    
    return (
        <>
           {usersList[0].username}
           {usersList[1].username}

            {<ul className="user-list">
                {usersList.forEach(user => {
                    <li>user.username</li>
                })}
            </ul>}
        </>
    )
}

export default Users;