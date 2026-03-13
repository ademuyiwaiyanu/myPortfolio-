 import React from "react";
import {NavLink} from "react-router-dom"
import { useState } from "react";
import { FaHamburger } from "react-icons/fa"
import { MdCancel } from "react-icons/md"
// import Button from "../component/Button";
// import harmburger2 from "../assets/img/harmburger2.png";



 
 

 const Navbar = () => {
  
      const [isOpen, setIsOpen] = useState(false);
      const navLinkStyles = ({ isActive}) =>
        isActive
      ? "text-blue-500 border-b-2 border-blue-500"
      : "hover:text-blue-500"

  //     const handleLinkClick = () => {
  //   setIsOpen(false);
  // };



  
  return (
    <>
    <nav className="flex justify-between items-center hover:bg-purple-300 p-6 shadow-md gap-6 bg-white sticky top-0 z-50">
    <h1 className="text-xl font-bold">Ademuyiwa Iyanu</h1>
    <div className="hidden md:flex md:space-x-4 hover:text-blue-950">
      <NavLink to="/" className={navLinkStyles}>Home</NavLink>
      <NavLink to="/about" className={navLinkStyles}>About</NavLink>
      <NavLink to="/project" className={navLinkStyles}>Project</NavLink>
      <NavLink to="/contact" className={navLinkStyles}>Contact</NavLink>
      <NavLink to="/resume" className={navLinkStyles}>Resume</NavLink>
      <NavLink to="/skills" className={navLinkStyles}>Skills</NavLink>
    </div>
    <div className="md:hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="text-2xl focus:outline-none">
        {isOpen ? <MdCancel />: <FaHamburger /> }
      </button>
    </div>

     {isOpen && (
     <div className='md:hidden hover:bg-purple-300 bg-white shadow-md flex flex-col items-start px-4 space-y-3'>
      <NavLink to="/" className={navLinkStyles}>Home</NavLink>
      <NavLink to="/about" className={navLinkStyles}>About</NavLink>
      <NavLink to="/project" className={navLinkStyles}>Project</NavLink>
      <NavLink to="/contact" className={navLinkStyles}>Contact</NavLink>
      <NavLink to="/resume" className={navLinkStyles}>Resume</NavLink>
      <NavLink to="/skills" className={navLinkStyles}>Skills</NavLink>
      {/* <img src= {harmburger2} alt="harmburger2" className="w-10"/> */}
    </div>
     )}
    
    
    
    
  
  </nav>
    </>
  );
}

export default Navbar;