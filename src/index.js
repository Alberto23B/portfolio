import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProjectPicker from './components/ProjectPicker';
import Bio from './components/Bio';
import Certificates from './components/Certifications';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element= { <App /> }>
        <Route index element={ <Bio /> }></Route>
        <Route path='/projects' element={ <ProjectPicker />}></Route>
        <Route path='/certificates' element={ <Certificates />}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
