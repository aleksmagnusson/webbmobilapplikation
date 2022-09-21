import React from 'react'
import C from "./C";

function B(props) {

    return (
        <div style={{ border: "1px solid yellow" }}>
            <p>B</p>
            <C {...props} />

        </div>
    )
}

export default B;
