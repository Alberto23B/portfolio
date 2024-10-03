import React from "react";
import { certificates } from "../data";

export default function Certificates() {
    return (
        <div className="flex flex-col w-3/4 m-auto top-32">
        <div className="w-full text-3xl font-bold text-center">
            <h2>Courses</h2>
          </div>
          <ul className="flex flex-no-wrap mb-3 overflow-x-scroll scrolling-touch new-scrollbar">
            {certificates.map(cert => {
                return <li className="flex-none m-5 font-bold w-72 card pink-text" key={cert.name}><a className="block h-12 line-clamp-2 links" href={cert.url} target="#">{cert.name}</a></li>
            })}
          </ul>
        </div>
    )
}