import "./App.css";
import logo_hex from "../src/assets/logo_hex.png";
import { NavLink, Outlet } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="h-screen">
      <nav className="fixed z-10 w-full overflow-hidden text-white border-b-2 md:hidden">
        <ul>
          <li className="">
            <NavLink to="/" className="my-auto text-center ">
              <span>&#47;&#47; Bio</span>
            </NavLink>
          </li>
          <li className="py-1">
            <NavLink to="/projects" className="w-1/6 my-auto text-center ">
              <span>&#47;&#47; Projects</span>
            </NavLink>{" "}
          </li>
          <li className="">
            <NavLink to="/certificates" className="w-1/6 my-auto text-center ">
              <span>&#47;&#47; Certifications</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <header className="z-10 items-center justify-between hidden w-8 h-full border-b-2 md:flex md:w-full md:h-20 4k:h-fit md:flex-row green-text">
        <div>
          <NavLink to="/">
            <img
              className="hidden w-20 ml-20 4k:w-32 md:ml-36 md:block"
              src={logo_hex}
              alt="a portrait"
            />
          </NavLink>
        </div>
        <div className="inline-flex w-2/3 mx-10 justify-evenly ">
          <div className="text-sm 4k:text-2xl">
            <p>.01</p>
            <NavLink to="/" className="my-auto text-center">
              <span>&#47;&#47; Bio</span>
            </NavLink>
          </div>
          <div className="text-sm 4k:text-2xl">
            <p>.02</p>
            <NavLink to="/projects" className="w-1/6 my-auto text-center ">
              <span>&#47;&#47; Projects</span>
            </NavLink>
          </div>
          <div className="text-sm 4k:text-2xl">
            <p>.03</p>
            <NavLink to="/certificates" className="w-1/6 my-auto text-center ">
              <span>&#47;&#47; Certifications</span>
            </NavLink>
          </div>
          <div className="text-sm group 4k:text-2xl">
            <p>.04</p>
            <button className="my-auto align-middle w-fit">
              <span>&#47;&#47; Contacts</span>
            </button>
            <div className="absolute z-10 hidden group-hover:block">
              <div className="px-2 pt-2 pb-4 bg-black shadow-lg">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-1 w-36">
                  <a
                    className="block"
                    href="https://www.linkedin.com/in/alberto-biolchi"
                  >
                    Linkedin
                  </a>
                  <a className="block" href="https://github.com/Alberto23B">
                    GitHub
                  </a>
                  <a
                    className="block"
                    href="mailto:biolchi.alberto23@gmail.com"
                  >
                    E-Mail
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Outlet></Outlet>
      <Analytics />
    </div>
  );
}

export default App;
