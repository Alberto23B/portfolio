import React, { useState } from "react";
import { bio } from "../data";


export default function Bio() {
    const [language, setLanguage] = useState("ita");
    const displayText = bio.filter((b) => b.lang === language);

    const handleClick = (e) => setLanguage(e.target.value)

    return (
        <>
          <div className="flex flex-row w-full h-screen">
            <div className="intro">
              <p> 
                {language === "eng" ? <span className="ciao">Hi,</span> : <span className="ciao">Ciao,</span>}
                {language === "eng" ? <span className="mio-nome">{` I'm Alberto`}</span> : <span className="mio-nome">{` sono Alberto`}</span>}
                {language === "eng" ? 
                <span className="text-2xl block text-pretty">I am a passionate learner in the field of web and application development</span>
                : <span className="text-2xl block text-pretty">Appassionato e corsista nell'ambito dello Sviluppo di siti web e applicativi</span> } 
              </p>
            </div>
            <div className="display-bio">
              {displayText.map((item, index) => (
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