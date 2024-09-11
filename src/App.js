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
      <header className="container header">
          <img className="logo" src={logo} alt="a portrait" />
          <ul className='navbar'>
            <li><a href="#section1">Bio</a></li>
            <li><a href="#section2">Projects & Certifications</a></li>
            <li><a href="#section3">Contacts</a></li>
          </ul>
          <h4>
            ALBERTO BIOLCHI PORTFOLIO
          </h4>
      </header>
      <section id='section1'></section>
      <Bio />
      <div id="section2" className='container project'>
        <ProjectPicker />
      </div>  
      <div className='logos'>
        <img className='image' src={htmlLogo} alt='html-logo'/>
        <img className='image' src={cssLogo} alt='css-logo'/>
        <img className='image' src={jsLogo} alt='js-logo'/>
        <img className='image' src={nodeLogo} alt='node-logo'/>
        <img className='image' src={reactLogo} alt='react-logo'/>
      </div>
      <div className='container cert'>
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
