import React from "react";
import { Link } from "react-router-dom";
import logonav from "../assets//SITKMUTT_logo.png"
const Navbar = () => {
  return (
    <nav className="w-full bg-black p-4 flex justify-between items-center">
    <img src={logonav} alt="SITKMUTT Logo" className="h-12" />
    <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors">
      SIT KMUTT
    </button>
  </nav>
  );
};

export default Navbar;
