import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
    return (
        <div className="relative w-full h-screen text-center text-white top-52">
            <h1 className="text-7xl green-text">404</h1>
            <p className="py-10 text-3xl">The page you are looking for doesn't exist</p>
            <button><Link className="text-3xl card" to="/">Home Page</Link></button>   
        </div>
    )
}