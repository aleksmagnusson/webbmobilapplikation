import React from 'react'
import { useRouteLoaderData } from 'react-router-dom'

function Profile() {
    const user = useRouteLoaderData("root");

    return (
        <div>
            <h1>Profile</h1>
            <h1>{ }</h1>
        </div>
    )
}

export default Profile
