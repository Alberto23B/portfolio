import React from "react";
import { certificates } from "../data";

export default function Certificates() {
    return (
        <>
        <h2>Certifications</h2>
          <ul>
            {certificates.map(cert => {
                return <li key={cert.name}><a href={cert.url}>{cert.name}</a></li>
            })}
          </ul>
        </>
    )
}