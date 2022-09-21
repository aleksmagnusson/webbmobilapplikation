import React from 'react'
import { useState } from "react";
import './ButtonCount.css'

/**
 * Skapa en komponent som innehåller em knapp med antalet likes (ex. 0 likes),
 * där du ökar innehållet för antalet likes varje gång du klickar på knappen.
 * 
 * Tips: Gör det som en separat komponent istället för direkt i App.jsx så kan
 * du återanvända ditt projekt till de andra ö
 */

function ButtonCount() {
    const [count, setCount] = useState(0);
    // previousState 

    return (
        <div>
            <p className='paragraf'>#1 <br /> Skapa en komponent som du ökar antalet likes när du klickar på den.</p>
            <button className="likeButton" onClick={() => setCount((count) => count + 1)}>
                {count} likes
            </button>
        </div>
    )
}

export default ButtonCount;
