import './App.css';
import Bio from './components/Bio';
import Certificates from './components/Certificates';
import ProjectPicker from "./components/ProjectPicker"

function App() {
  return (
    <div>
      <header className="header">
        <h1>
          Alberto Biolchi Portfolio
        </h1>
      </header>
      <Bio />
      <ProjectPicker />
      <Certificates />
    </div>
  );
}

export default App;
