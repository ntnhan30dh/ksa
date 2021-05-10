import React, { useState, useEffect } from "react"
import logo from "../images/logo.png"
import { Link } from "gatsby"

const Header = () => {

  return (
    <header className="headerWrapper  z-50 w-full py-4 px-2 md:px-10 ">
    
      <nav className='nav flex justify-between items-center w-full' >
        <div className="left flex ">
          <Link to="/"  className=" w-24 lg:w-48 mr-8">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="right">
              <Link to="/story" className=" text-sm md:text-xl  bold flex  items-center">
               <span className="my-auto text-charcoal">
                 Our Story
                </span>
                 </Link>     
        </div>
      </nav>
    </header>
  )
}

export default Header
