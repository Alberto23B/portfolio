import React, { useState } from "react";
import '../App.css';
import { bio } from "../data";

export default function Bio() {
    const [language, setLanguage] = useState("ita");
    const display = bio.filter((b) => b.lang === language);

    const handleClick = (e) => setLanguage(e.target.value)

    return (
        <>
          <button className="buttons" type="radio" id="ita" name="lang" value="ita" onClick={handleClick}>Ita</button>
          <button className="buttons" type="radio" id="eng" name="lang" value="eng" onClick={handleClick}>Eng</button>
          <div>
            {display.map((item, index) => (
                    <p key={index}>{item.description}</p> 
                ))}
          </div>
        </>
    )
}