import './App.css';
import logo from '../src/assets/self.svg';
import  { NavLink, Outlet} from "react-router-dom";

function App() {
  return (
    <div>
      <header className="flex flex-row justify-around w-full bg-black text-cyan-50">
          <img className="w-10 ml-10 rounded-full aspect-square" src={logo} alt="a portrait" />
          <NavLink to="/" className= "m-auto text-center text-white"><span>Bio</span></NavLink>
          <NavLink to="/projects" className="m-auto text-center text-white"><span>Projects & Certifications</span></NavLink>
          <div className="group">
            <button className="w-48 h-full m-auto text-white align-middle">
                <span>Contacts</span>
            </button>
            <div className="absolute z-10 hidden group-hover:block">
              <div className="px-2 pt-2 pb-4 bg-black shadow-lg">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-1 w-36">
                  <a className='block' href='https://www.linkedin.com/in/alberto-biolchi'>Linkedin</a>
                  <a className='block' href='https://github.com/Alberto23B'>GitHub</a>
                  <a className='block' href='mailto:biolchi.alberto23@gmail.com'>E-Mail</a>
                </div>
              </div>
            </div>
          </div>  
          <h4 className="self-center ml-auto mr-10 ">
            ALBERTO BIOLCHI PORTFOLIO
          </h4>
      </header>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
