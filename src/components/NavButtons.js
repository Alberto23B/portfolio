import React from "react";
import { Link } from "react-router-dom";

export default function NavButtons() {
  return (
    <div className="flex-row justify-around hidden w-full py-10 md:flex ">
      <button className="block w-1/3 p-5 growing card-green">
        <Link to="mailto:biolchi.alberto23@gmail.com">Contact me</Link>
      </button>
      <button className="block w-1/3 p-5 growing card-green">
        <Link to="/projects">Projects</Link>
      </button>
    </div>
  );
}
