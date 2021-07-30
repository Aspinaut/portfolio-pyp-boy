import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Users()
{
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios
            .get('http://localhost:8000/api/users/')
            .then(res => {
                console.log(res.data)
                setUsers(res.data)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <>
            <ul className="user-list">
                {users.map(user => <li>{user.username}</li>)}
            </ul>
        </>
    )
}

export default Users