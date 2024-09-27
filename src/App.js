import './App.css';
import Bio from './components/Bio';
import Certificates from './components/Certifications';
import ProjectPicker from "./components/ProjectPicker"
import logo from '../src/assets/self.svg';
import htmlLogo from '../src/assets/html.png';
import cssLogo from '../src/assets/css.png';
import jsLogo from '../src/assets/js.png';
import nodeLogo from '../src/assets/node.png';
import reactLogo from '../src/assets/react.png';

function App() {
  return (
    <div>
      <header className=" w-full flex flex-row bg-black text-cyan-50 fixed">
          <img className="w-10 ml-10 aspect-square rounded-full" src={logo} alt="a portrait" />
          <h4 className=" self-center ml-auto mr-10">
            ALBERTO BIOLCHI PORTFOLIO
          </h4>
      </header>
      <section id='section1'></section>
      <img className="logo-responsive" src={logo} alt="a portrait" />
      <Bio />
      <div id="section2">
        <ProjectPicker />
      </div>  
      <div>
        <Certificates />
      </div>
      <ul id="section3" className='contacts'>
        <li><a href='https://www.linkedin.com/in/alberto-biolchi/' target="#">LinkedIn</a></li>
        <li><a href='https://github.com/Alberto23B' target="#">GitHub</a></li>
        <li><a href="mailto:biolchi.alberto23@gmail.com">Email</a></li>
      </ul>
    </div>
  );
}

export default App;
