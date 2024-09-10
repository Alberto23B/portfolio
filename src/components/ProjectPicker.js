import React from "react";
import { projects } from "../data" 

export default function ProjectPicker() {
    return (
        <div className="content project">
          <div className="bar">
            <h2>Projects</h2>
          </div>
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
          </div>
    )
}