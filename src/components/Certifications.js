import React from "react";
import { certificates } from "../data";

export default function Certificates() {
    return (
        <div className="relative flex flex-col w-3/4 m-auto top-24">
          <div className="w-full mt-3 text-3xl font-bold text-center">
            <h2 className="green-text">Courses</h2>
          </div>
          <ul className="flex flex-no-wrap items-start my-3 overflow-x-scroll scrolling-touch new-scrollbar">
            {certificates.map(cert => {
                return <li className="flex-none py-12 m-5 h-36 w-72 card" key={cert.name}><a className="block h-12 line-clamp-2 links" href={cert.url} target="#">{cert.name}</a></li>
            })}
          </ul>
        </div>
    )
}