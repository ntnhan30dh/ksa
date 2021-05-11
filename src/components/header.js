import React, { useState, useEffect } from "react"
import logo from "../images/logo.png"
import { Link } from "gatsby"

const Header = (props) => {
 
  let menuActive = props.menuState ? "is-inactive" : ""
  let change = props.menuState ? "change" : ""
  const link = "text-sm md:text-xl  font-bold flex  items-center w-max pl-8 py-4 sm:py-0 sm:pl-4 lg:pl-8"
  const span = "my-auto text-charcoal hover:text-lipstick "
  return (
    <header className="headerWrapper  z-50 w-full py-4 px-2 sm:px-10 sticky top-0 bg-white md:py-8 lg:px-20">
      <nav className="nav flex justify-between items-center w-full flex-col sm:flex-row">
        <div className="left flex items-center ">
          <Link to="/" className=" w-28 md:w-32 lg:w-48 mr-8" >
            <img src={logo} alt="logo" />
          </Link>
          <div className={`burgerMenu mx-4 ${change}`} onClick={props.toggleMenu} onKeyDown={props.toggleMenu} role = "button" tabIndex={-1}>
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </div>
        </div>
        <div className= {`rightDiv  hidden sm:flex w-full sm:w-max flex-wrap sm:flex-nowrap md:justify-center  ${menuActive}`}>
          <Link to="/#story" className={link} activeClassName="bg-black">
            <span className={span}>Our Story</span>
          </Link>
          <Link to="/#how" className={link}>
            <span className={span}>How It Works</span>
          </Link>

          <Link to="/#why" className={link}>
            <span className={span}>Why Us</span>
          </Link>

          <Link to="/contact" className={link} >
            <span className={span}>Contact Us</span>
          </Link>

          <Link to="/" className={link}>
            <span className={span}>Get Started</span>
          </Link>

        </div>
      </nav>
    </header>
  )
}

export default Header
