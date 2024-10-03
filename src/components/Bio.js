import React, { useState } from "react";
import { Link } from "react-router-dom";
import { bio } from "../data";


export default function Bio() {
    const [language, setLanguage] = useState("ita");
    const displayText = bio.filter((b) => b.lang === language);

    const handleClick = (e) => setLanguage(e.target.value)

    return (
        <>
          <div className="relative flex flex-col w-2/5 ml-56 top-32 justify-evenly bio">
            <div className="self-center md:mt-0">
              <p> 
                <span className="text-lg green-text">Ciao, I'm</span><br />
              </p>
              <h3 className="text-4xl font-bold green-text">Alberto Biolchi</h3>
              <p className="py-4 text-lg tracking-wide text-white fira" >I’m an aspiring web developer, amazed by the world of 
              coding. I am changing my life day by day committing to learn and build small, working websites and application looking for someday build big, working wonders in the great world of development.
              </p>
            </div>
            <p className="italic text-right pink-text">-"I'll build amazing things"</p>  
          </div>
          <div className="bio2 relative top-36 green-text right-40 text.lg float-end">
            <p>Languages used at the moment:</p>
            <p>HTML, CSS, JavaScript, JSX, CLI.</p>
            <p>Frameworks:</p>
            <p>React.js</p>
          </div>
          <Link className="block m-auto mb-5 text-3xl font-bold text-center md:hidden " to="/projects">Projects<span>&#8594;</span></Link>
        </>
    )
}