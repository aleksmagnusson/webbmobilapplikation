import React, { useState } from 'react'
import C from "./C";

function B({ setNum }) {
    const [num, setNum] = useState(0);

    return (
        <C setNum={setNum}>

        </C>
    )
}

export default B
