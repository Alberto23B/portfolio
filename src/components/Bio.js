import React, { useState } from "react";
import { bio } from "../data";
import logo from '../self.svg';

export default function Bio() {
    const [language, setLanguage] = useState("ita");
    const display = bio.filter((b) => b.lang === language);

    const handleClick = (e) => setLanguage(e.target.value)

    return (
        <>
          <img className="logo" src={logo} alt="a portrait" />
          <div className="display-bio">
            {display.map((item, index) => (
                    <p key={index}>{item.description}</p> 
                ))}
          </div>  
          <div className="buttons">
            <button className="button" type="radio" id="ita" name="lang" value="ita" onClick={handleClick}>Ita</button>
            <button className="button" type="radio" id="eng" name="lang" value="eng" onClick={handleClick}>Eng</button>
          </div> 
        </>
    )
}