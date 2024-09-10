import React from "react";
import { projects } from "../data" 

export default function ProjectPicker() {
    return (
        <>
          <div>
            {projects.map((proj) => {
                return (
                    <div>
                      <a href={proj.url}>{proj.name}</a>
                      <p>{proj.description}</p>
                    </div>  
                )
            })}
          </div>
        </>
    )
}