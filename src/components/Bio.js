import React, { useState } from "react";
import { Link } from "react-router-dom";
import { bio } from "../data";


export default function Bio() {
    const [language, setLanguage] = useState("ita");
    const displayText = bio.filter((b) => b.lang === language);

    const handleClick = (e) => setLanguage(e.target.value)

    return (
        <>
          <div className="relative flex flex-col w-full h-lvh md:flex-row md:h-screen justify-evenly">
            <div className="self-center mt-10 text-5xl text-center w-96 md:mt-0">
              <p> 
                {language === "eng" ? <span className="ciao">Hi,</span> : <span className="ciao">Ciao,</span>}<br />
                {language === "eng" ? <span className="mio-nome">{` I'm Alberto`}</span> : <span className="mio-nome">{` sono Alberto`}</span>}
                {language === "eng" ? 
                <span className="block text-3xl text-pretty">I am a passionate learner in the field of web and application development</span>
                : <span className="block text-3xl text-pretty">Appassionato e corsista nell'ambito dello Sviluppo di siti web e applicativi</span> } 
              </p>
            </div>
            <div className="relative self-center block text-center md:inline-block md:w-96 w-80 text-balance">
              {displayText.map((item, index) => (
                  <p key={index}>{item.description}</p> 
              ))}
                <div className="buttons">
                <button className="button" type="radio" id="ita" name="lang" value="ita" onClick={handleClick}>Ita</button>
                <button className="button" type="radio" id="eng" name="lang" value="eng" onClick={handleClick}>Eng</button>
              </div> 
            </div>   
          </div>
          <Link className="block m-auto mb-5 text-3xl font-bold text-center md:hidden " to="/projects">Projects<span>&#8594;</span></Link>
        </>
    )
}