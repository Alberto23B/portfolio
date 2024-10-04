import React from "react";
import { Link } from "react-router-dom";

export default function NavButtons() {
    return (
        <div className="flex-row hidden py-10 md:flex ">
            <button className="w-1/5 p-5 mx-5 growing card-pink"><Link to="mailto:biolchi.alberto23@gmail.com">Contact me</Link></button>
            <button className="w-1/5 mx-5 growing card-pink"><Link to="/projects">Projects</Link></button>
        </div>
    )
}