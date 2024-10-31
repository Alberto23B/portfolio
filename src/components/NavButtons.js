import React from "react";
import { Link } from "react-router-dom";

export default function NavButtons() {
    return (
        <div className="flex-row justify-around hidden w-full py-10 md:flex ">
            <button className=""><Link className="block w-full p-5 px-24 growing card-green" to="mailto:biolchi.alberto23@gmail.com">Contact me</Link></button>
            <button className=""><Link className="block p-5 px-24 growing card-green" to="/projects">Projects</Link></button>
        </div>
    )
}