import React from "react";
import { certificates } from "../data";

export default function Certificates() {
    return (
        <>
        <div className="bar">
            <h2>Certifications</h2>
          </div>
          <ul className="cert-list">
            {certificates.map(cert => {
                return <li className="spaced-li" key={cert.name}><a href={cert.url} target="#">{cert.name}</a></li>
            })}
          </ul>
        </>
    )
}