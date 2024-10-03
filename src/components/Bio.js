import React, { useState } from "react";
import { bio } from "../data";


export default function Bio() {
    const [language, setLanguage] = useState("ita");
    const displayText = bio.filter((b) => b.lang === language);

    const handleClick = (e) => setLanguage(e.target.value)

    return (
        <>
          <div className="relative flex flex-col justify-around w-3/4 ml-10 md:ml-36 md:w-2/4 4k:w-2/5 4k:ml-56 top-32 md:top-32 h-2/5 md:bio">
            <div className="self-center md:mt-0">
              <p> 
                <span className="text-lg 4k:text-3xl green-text ">Ciao, I'm</span><br />
              </p>
              <h3 className="text-4xl font-bold tracking-wider 4k:text-7xl md:whitespace-nowrap green-text">Alberto Biolchi</h3>
              <p className="py-4 text-sm tracking-wide text-white 4k:text-3xl md:text-lg fira" >I’m an aspiring web developer, amazed by the world of 
              coding. I am changing my life day by day committing to learn and build small, working websites and application looking for someday build big, working wonders in the great world of development.
              </p>
            </div>
            <p className="block italic text-right pink-text 4k:text-3xl">-"I'll build great things"</p>  
            <div className="w-full mt-16 text-center text-white md:hidden">
              <a href='https://www.linkedin.com/in/alberto-biolchi' className="inline">//Linkedin </a>
              <a href="https://github.com/Alberto23B" className="inline">//GitHub </a>
              <a href="mailto:biolchi.alberto23@gmail.com" className="inline">//Email</a>
            </div>
          </div>
          <div className="hidden clear-both w-1/4 text-lg bio2 md:block green-text 4k:text-3xl float-end">
            <p>Languages used at the moment:</p>
            <p>HTML, CSS, JavaScript, JSX, CLI.</p>
            <p>Frameworks:</p>
            <p>React.js</p>
          </div>
        </>
    )
}