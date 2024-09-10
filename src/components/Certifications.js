import React from "react";
import { certificates } from "../data";

export default function Certificates() {
    return (
        <div className="content cert">
        <div className="bar">
            <h2>Certifications</h2>
          </div>
          <ul>
            {certificates.map(cert => {
                return <li key={cert.name}><a href={cert.url}>{cert.name}</a></li>
            })}
          </ul>
        </div>
    )
}