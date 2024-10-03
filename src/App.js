import './App.css';
import logo_hex from '../src/assets/logo_hex.png'
import  { Link, NavLink, Outlet} from "react-router-dom";

function App() {
  return (
    <div className="h-screen">
      <nav className='fixed z-10 w-full overflow-hidden text-white border-b-2 md:hidden'>
        <ul>
          <li className=''><NavLink to="/" className= "my-auto text-center "><span>// Bio</span></NavLink></li>
          <li className='py-1'><NavLink to="/projects" className="w-1/6 my-auto text-center "><span>// Projects</span></NavLink>  </li>
          <li className=''><NavLink to="/certificates" className="w-1/6 my-auto text-center "><span>//  Certifications</span></NavLink></li>
        </ul>
      </nav>
      <header className="z-10 items-center justify-between hidden w-8 h-full border-b-2 md:flex md:w-full md:h-20 md:flex-row green-text">
        <div>
          <img className="hidden w-20 ml-48 md:block" src={logo_hex} alt="a portrait" />
        </div>
        <div className='inline-flex w-2/3 mx-10 justify-evenly'>
          <div className='text-sm'>
            <p>.01</p>
            <NavLink to="/" className= "my-auto text-center "><span>// Bio</span></NavLink>
          </div>
          <div className='text-sm'>
            <p>.02</p>
            <NavLink to="/projects" className="w-1/6 my-auto text-center "><span>// Projects</span></NavLink>  
          </div>
          <div className='text-sm'>
            <p>.03</p>
            <NavLink to="/certificates" className="w-1/6 my-auto text-center "><span>//  Certifications</span></NavLink>
          </div>
          <div className="text-sm group">
            <p>.04</p>
            <button className="my-auto align-middle w-fit"><span>// Contacts</span>
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
        </div>
      </header>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
