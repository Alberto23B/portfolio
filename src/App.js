import './App.css';
import Bio from './components/Bio';
import Certificates from './components/Certifications';
import ProjectPicker from "./components/ProjectPicker"
import logo from '../src/assets/self.svg';

function App() {
  return (
    <div>
      <header className="container header">
          <img className="logo" src={logo} alt="a portrait" />
          <h4>
            ALBERTO BIOLCHI PORTFOLIO
          </h4>
      </header>
      <Bio />
      <ul className='contacts'>
        <li><a href='https://www.linkedin.com/in/alberto-biolchi/' target="#">LinkedIn</a></li>
        <li><a href='https://github.com/Alberto23B' target="#">GitHub</a></li>
        <li><a href="mailto:biolchi.alberto23@gmail.com">Email</a></li>
      </ul>
      <div className='container'>
        <ProjectPicker />
        <Certificates />
      </div>
    </div>
  );
}

export default App;
