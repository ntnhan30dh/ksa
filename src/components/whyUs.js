import React, { useState, useRef } from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import risk from "../images/logo_risk.png"
import expansion from "../images/logo_expansion.png"
import Slider from "react-slick"

const settings = {
  dots: true,
  infinite: true,
  // fade: true,
  speed: 0,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 4000,
}

const WhyUS = () => {
  const data = useStaticQuery(graphql`
    {
      whyUs: file(relativePath: { eq: "whyUs_lowRisk.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
 //creating the ref
  const customeSlider = useRef();
  const gotoNext = () => {
    customeSlider.current.slickNext()
  }

  const gotoPrev = () => {
    customeSlider.current.slickPrev()
  }
  const logoDiv = " w-20 h-20 my-10"
  const whyUs = "text-2xl sm:text-2xl lg:text-3xl pt-10"

  return (
    <section className="WhyUsContainer w-full px-10 md:px-16 lg:px-20 xl:px-44 2xl:px-72   ">
      <Slider  {...settings} ref={customeSlider} className=" ">
        <div className="slide">
          <Img fluid={data.whyUs.childImageSharp.fluid} className="w-full" />
          <div className="text">
            <h1 className={whyUs}> Why Us</h1>
            <div className={logoDiv}>
              <img src={risk} alt="logo" />
            </div>
            <h4>Low Risk Imvestment</h4>
            <p>
              We invest in great locations and manage all legal checks and
              processes.
            </p>
          
           
          </div>
        </div>

        <div className="slide">
          <Img fluid={data.whyUs.childImageSharp.fluid} className="w-full" />
          <div className="text">
            <h1 className={whyUs}> Why Us</h1>
            <img src={expansion} alt="logo" />
            <h4>Rapid Expansion</h4>
            <p>Easily expand to high growth hyper local areas</p>
          </div>
        </div>
      </Slider>
        <button onClick={()=>gotoNext()}>Next</button>
      <button onClick={()=>gotoPrev()}>Previous</button>
    </section>
  )
}

export default WhyUS
