import React from "react";
import { certificates } from "../data";

export default function Certificates() {
    return (
        <div className="flex flex-col w-3/4 m-auto">
        <div className="font-bold text-3xl w-full text-center">
            <h2>Certifications</h2>
          </div>
          <ul className="flex flex-no-wrap overflow-x-scroll scrolling-touch items-start mb-8 new-scrollbar">
            {certificates.map(cert => {
                return <li className="flex-none w-72 h-80 m-5 py-12 card" key={cert.name}><a href={cert.url} target="#">{cert.name}</a></li>
            })}
          </ul>
        </div>
    )
}