import React from 'react'
import { useState } from "react";

/**
 * Skapa en komponent som innehåller två knappar ungefär som i övning #1.
 * Ett 'select'-element med de vanligaste matematiska symbolerna ( + , - , * , / ).
 * 
 * Knapparna ska vara oberoende av varandra och får inte dela state.
 * När du trycker på en av knapparna ska den öka med ett(1).
 *  
 * Men du får bara använda 3st states totalt. Varje 'state' får bara innehålla i ett värde.
 */

function Calculator() {
    const [countLeft, setCountLeft] = useState(0);

    const [countRight, setCountRight] = useState(0);

    const [operates, setOperates] = useState(0);


    return (
        <div>
            <p className='paragraf'>#2 <br /> Öka numret när du trycker på knapparna och visa resultatet i knappen.</p>
            <button className="likeButton" onClick={() => setCountLeft((countLeft) => countLeft + 1)}>
                {countLeft}
            </button>
            <select className='operator'>
                <option value="addition">+</option>
                <option value="subtraction">-</option>
                <option value="multiplies">*</option>
                <option value="divided">/</option>
            </select>
            <button className="likeButton" onClick={() => setCountRight((countRight) => countRight + 1)}>
                {countRight}
            </button>
        </div>
    )
}

export default Calculator;
