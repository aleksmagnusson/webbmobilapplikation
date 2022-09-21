/**
 * ShowPrimeNumbers: Ska skriva ut alla primtal upp till den gränsen som angetts i LimitInput.
 * (Här kommer du behöva hitta ett sätt att räkna ut primtal med).
 */

import React from 'react'
import { useState } from 'react'
import LimitInput from './LimitInput';
import ShowPrimeNumbers from './ShowPrimeNumbers';

function Prime() {
    const [limit, setLimit] = useState(100);

    return (
        <div>
            <ShowPrimeNumbers />
            <LimitInput limit={limit} />
        </div>
    )
}

export default Prime