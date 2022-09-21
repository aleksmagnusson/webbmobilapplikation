import React from 'react'

function LimitInput({ limit, setLimit }) {
    return (
        <div>
            <p>Gräns: </p>
            <input value={limit} type="number" onChange={(e) => {
                setLimit(value);
            }}
            />
        </div>
    )
}

export default LimitInput;