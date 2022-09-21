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

// Given parts of states to calculator
function Calculator() {
    const [left, setLeft] = useState(0);
    const [right, setRight] = useState(0);
    const [math, setMath] = useState("+");

    // Math functions
    function calculate() {
        if (math === "+") return left + right;
        if (math === "-") return left - right;
        if (math === "*") return left * right;
        if (math === "/") return left / right;
    }

    return (
        <div>
            <p className='paragraf'>#2 <br /> Öka numret när du trycker på knapparna och visa resultatet i knappen.</p>
            <button className="likeButton" onClick={() => setLeft((left) => left + 1)}>{left}</button>
            <select className='operator' value={math} onChange={(event) => setMath(event.target.value)}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>
            <button className="likeButton" onClick={() => setRight(right + 1)}>{right}</button>
            <p>= {calculate()}</p>
        </div>
    )
}

export default Calculator;
