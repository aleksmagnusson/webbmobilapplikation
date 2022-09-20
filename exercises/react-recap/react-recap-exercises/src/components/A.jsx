import React, { useState } from 'react'
import B from "./B";

function A({ num, setNum }) {
    const [num, setNum] = useState(0);

    return (
        <div>
            <B num={num} setNum={setNum}></B>
        </div>

    )
}

export default A

