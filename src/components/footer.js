import React from "react"
//import { Link } from "gatsby"
import fb from "../images/fb.png"
import inn from "../images/inn.png"
import ig from "../images/ig.png"

const Footer = () => {
  const logoDiv = " w-11 p-2"
  //const element = "element w-full"
  return (
    <section className="footerContainer bg-charcoal py-10 md:py-20">
      <div className="footerWrapper w-full text-center text-white md:flex items-center ">
        <div className="w-full">
          <ul>
            <li> Imprint</li>
            <li>Privacy</li>
            <li>Disclamer</li>
          </ul>
        </div>

        <div className="w-full my-10 md:my-0">
          <h4 className="uppercase">Contact Us</h4>
          <p>
            Delivery Hero | Kingdom of Saudi Arabia
            <br />
            Riyadh | Riyadh Front | Business N7
            <br />
            sales@deliveryhero.com
          </p>
        </div>

        <div className="w-full text-center`">
          <h4 className="uppercase">follow us</h4>
          <div className="icons flex justify-center">
            <div className={logoDiv}>
              <img src={fb} alt="logo" />
            </div>
            <div className={logoDiv}>
              <img src={inn} alt="logo" />
            </div>
            <div className={logoDiv}>
              <img src={ig} alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
