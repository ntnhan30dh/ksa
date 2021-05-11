import React, { useState } from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"


import Header from "../components/header"
import Footer from "../components/footer"

import "../styles/index.scss"

import "semantic-ui-css/semantic.min.css"

export default function Home() {

  let [menuActive, setmenuActive] = useState(false);
  const toggleMenu = () => {
		setmenuActive(!menuActive)
    }
   
  const data = useStaticQuery(graphql`
  {
   
    ourStory: file(relativePath: { eq: "ourStory.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`)
  return (
    <div className="pageWrapper ">
      <head>
        <title>DH Kitchens KSA</title>
      </head>
      <Header toggleMenu={toggleMenu} menuState={menuActive}/>

      <section className="contact w-full my-20 md:my-44">
        <div className="contactWrapper md:flex">
          <div className="text my-28 mx-10 md:w-1/2 lg:pl-44">
            <h2 className="text-charcoal"> Contact Us</h2>
            <p className="text-charcoal my-10">
              {" "}
              Delivery Hero | Kingdom of Saudi Arabia
              <br />
              Riyadh | Riyadh Front | Business N7
            </p>
            <p className="text-lipstick font-bold">sales@deliveryhero.com</p>
          </div>
          <div className="pic md:w-1/2 md:pr-20 lg:pr-44">
          <Img
          fluid={data.ourStory.childImageSharp.fluid}
          className="banner"
          className=""
        />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
