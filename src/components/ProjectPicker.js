import React from 'react';
import { projects } from '../data';
import ProjectCard from './ProjectCard';

export default function ProjectPicker() {
  return (
    <div className='relative flex flex-col w-3/4 m-auto top-24'>
      <div className='w-full mt-3 text-3xl font-bold text-center'>
        <h2 className='green-text 4k:text-7xl'>Projects</h2>
      </div>
      <div className='flex flex-col flex-no-wrap items-start my-3 overflow-x-scroll scrolling-touch md:items-center md:flex-row new-scrollbar'>
        {projects.map((project, i) => {
          return <ProjectCard project={project} i={i} key={i} />;
        })}
      </div>
    </div>
  );
}
