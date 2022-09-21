import React, { useState } from 'react'
import B from "./B";

function A() {
    const [x, setX] = useState(0);

    function addOne() {
        setX(x + 1);
    }

    return (
        <div style={{ border: "1px solid red" }}>
            <p>A</p>
            <B value={x} onClick={addOne} />
        </div>

    )
}

export default A;

/**
 * 
 * 
 */