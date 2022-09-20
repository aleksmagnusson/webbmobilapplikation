import React, { useState } from 'react'

function C({ num, setNum }) {
    const [num, setNum] = useState(0);

    return (
        <button className="likeButton" onClick={() => setNum((num) => num + 1)}>
            {num} A,B,C.
        </button>
    )
}

export default C