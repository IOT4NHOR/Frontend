import React from "react";
import { Link } from "react-router-dom";
import logonav from "../assets//SIT30L.png"
const Navbar = () => {
  return (
   <nav className="w-full bg-gray-900 p-4 flex justify-between items-center shadow-lg">
    <a href="/"><img
             src={logonav}
             
             alt="SITKMUTT Logo"
             className="h-12 transition-transform hover:scale-105"
           /></a>
           
           <div className="text-white font-semibold text-lg animate-slide-in-right right-btn-nav d-flex" style={{display:"flex",}}>
             <a href="/"style={{marginRight:"1rem"}}>Seating Monitor </a>
             <a href="/Dashboard">DashBoard</a>
           </div>
           
         </nav>
  );
};

export default Navbar;
