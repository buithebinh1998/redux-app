import React from 'react'
import './User.css'
const User = (props) => {
    return(
        <div className="user">
            <div>User has an ID {props.id}: </div>
            <ul>
                <li>Name: {props.name}</li>
                <li>Email: {props.email}</li>
                {props.active ? <li>Activation: True</li> : <li>Activation: False</li>}
            </ul>
        </div>
    )
}

export default User;