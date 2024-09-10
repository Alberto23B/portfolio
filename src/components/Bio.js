import React, { useState } from "react";
import { bio } from "../data";


export default function Bio() {
    const [language, setLanguage] = useState("ita");
    const display = bio.filter((b) => b.lang === language);

    const handleClick = (e) => setLanguage(e.target.value)

    return (
        <>
          <div className="container bio">
            <p className="intro">
                <span className="ciao">Ciao,</span>
                <span className="mio-nome">{` sono Alberto`}</span>
            </p>
            <div className="display-bio">
              {display.map((item, index) => (
                  <p key={index}>{item.description}</p> 
              ))}
                <div className="buttons">
                <button className="button" type="radio" id="ita" name="lang" value="ita" onClick={handleClick}>Ita</button>
                <button className="button" type="radio" id="eng" name="lang" value="eng" onClick={handleClick}>Eng</button>
              </div> 
            </div>   
          </div>
        </>
    )
}