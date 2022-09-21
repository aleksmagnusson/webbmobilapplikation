import React, { useState } from 'react'

function C(props) {

    return (
        <div style={{ border: "1px solid green" }}>
            <p>C</p>
            <p>x är = {props.value}</p>
            <button className='likeButton' onClick={props.onClick}>x++</button>
        </div>
    )
}

export default C