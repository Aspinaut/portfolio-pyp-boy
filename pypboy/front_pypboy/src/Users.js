import React, { useState, useEffect } from 'react'
import axios from 'axios'

// function Users()
// {
//     const [users, getUsers] = useState([
//         {
//             id: 0,
//             username: '',
//             email: ''
//         }
//     ])

//     const getUsersList = () => {
//         let options = {
//             method: "GET",
//             url: 'http://localhost:8000/api/users/'   
//         }
//         axios(options)
//         .then(response => {
//             getUsers([
//                 ...response.data
//             ])
//         })
//         .catch(error => console.error(error))
//     }

//     useEffect(() => {
//         getUsersList()
//     }, [])
    
//     return (
//         <>
//            {users[0].username}

//             {<ul className="user-list">
//                 {users.forEach(user => {
//                     <li>user.username</li>
//                 })}
//             </ul>}
//         </>
//     )
// }

const api = axios.create({
    baseURL: 'http://localhost:8000/api/'
})

class Users extends React.Component
{
    state = {
        users: []
    }
    constructor() {
        super()
        api.get('users/').then(response => {
            this.setState({users: response.data})
            console.log(response.data)
        })
    }
    render() {
        return (
            <>
                {this.state.users[0].username}

                {<ul className="user-list">
                    {this.state.users.map(user => {
                        return (
                            <li>user.username</li>
                        )
                    })}
                </ul>}
            </>
        )
    }
}

export default Users;