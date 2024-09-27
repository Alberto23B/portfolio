import './App.css';
import logo from '../src/assets/self.svg';
import  { NavLink, Outlet} from "react-router-dom";

function App() {
  return (
    <div>
      <header className=" w-full flex flex-row bg-black text-cyan-50">
          <img className="w-10 ml-10 aspect-square rounded-full" src={logo} alt="a portrait" />
          <NavLink to="/" className="text-white"><span>Bio</span></NavLink>
          <NavLink to="/projects" className="text-white"><span>Projects & Certifications</span></NavLink>
          <h4 className=" self-center ml-auto mr-10">
            ALBERTO BIOLCHI PORTFOLIO
          </h4>
      </header>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
