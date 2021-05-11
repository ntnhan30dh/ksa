import React, { useState, useRef } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import risk from "../images/logo_risk.png"
import expansion from "../images/logo_expansion.png"
import growth from "../images/logo_growth.png"
import eco from "../images/logo_eco.png"
import strength from "../images/logo_strength.png"
import next from "../images/next.png"
import previous from "../images/previous.png"
import Slider from "react-slick"

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
  const customeSlider = useRef()
  const gotoNext = () => {
    customeSlider.current.slickNext()
  }

  const gotoPrev = () => {
    customeSlider.current.slickPrev()
  }

  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    appendDots: dots => {
      return (
        <div className="w-full">
          <div className="w-0 md:w-1/2"></div>
          <ul className=" md:w-1/2">
            <button onClick={() => gotoPrev()}>
              {" "}
              <div className={arrowDiv}>
                <img src={previous} alt="arrow" />
              </div>
            </button>
            {dots}
            <button onClick={() => gotoNext()}>
              <div className={arrowDiv}>
                <img src={next} alt="arrow" />
              </div>
            </button>
          </ul>
        </div>
      )
    },
  }

  const logoDiv = " w-20 h-20 lg:my-10"
  const whyUs = "text-2xl sm:text-2xl lg:text-3xl pt-10 md:pt-0"
  const arrowDiv = "w-6"
  const slide = "md:flex"
  const imgWrapper = "w-full md:w-1/2 pr-12 lg:pr-20"
  const img = "w-full  "
  const text = " md:w-1/2"
  const p = "lg:w-1/2 pb-12 "

  return (
    <section className="WhyUsContainer w-full px-10 md:px-16 lg:px-20 xl:px-44 2xl:px-72 pb-44 pt-20 ">
      <Slider {...settings} ref={customeSlider} className=" ">
        <div>
          <div className={slide}>
            <div className={imgWrapper}>
              <Img fluid={data.whyUs.childImageSharp.fluid} className={img} />
            </div>
            <div className={text}>
              <h1 className={whyUs}> Why Us</h1>
              <div className={logoDiv}>
                <img src={risk} alt="logo" />
              </div>
              <h4>Low Risk Imvestment</h4>
              <p className={p}>
                We invest in great locations and manage all legal checks and
                processes.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className={slide}>
            <div className={imgWrapper}>
              <Img fluid={data.whyUs.childImageSharp.fluid} className={img} />
            </div>
            <div className={text}>
              <h1 className={whyUs}> Why Us</h1>
              <div className={logoDiv}>
                <img src={expansion} alt="logo" />
              </div>
              <h4>Rapid Expansion</h4>
              <p className={p}>
                Easily expand to high growth hyper local areas
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className={slide}>
            <div className={imgWrapper}>
              <Img fluid={data.whyUs.childImageSharp.fluid} className={img} />
            </div>
            <div className={text}>
              <h1 className={whyUs}> Why Us</h1>
              <div className={logoDiv}>
                <img src={growth} alt="logo" />
              </div>
              <h4>Focused on Growth</h4>
              <p className={p}>
              Detailed data driven insights on optimal menu, pricing and order growth              </p>
            </div>
          </div>
        </div>

        <div>
          <div className={slide}>
            <div className={imgWrapper}>
              <Img fluid={data.whyUs.childImageSharp.fluid} className={img} />
            </div>
            <div className={text}>
              <h1 className={whyUs}> Why Us</h1>
              <div className={logoDiv}>
                <img src={eco} alt="logo" />
              </div>
              <h4>Better Economics</h4>
              <p className={p}>
              Better Economics              </p>
            </div>
          </div>
        </div>

        <div>
          <div className={slide}>
            <div className={imgWrapper}>
              <Img fluid={data.whyUs.childImageSharp.fluid} className={img} />
            </div>
            <div className={text}>
              <h1 className={whyUs}> Why Us</h1>
              <div className={logoDiv}>
                <img src={strength} alt="logo" />
              </div>
              <h4>Strength of Kitchens KSA Platforms</h4>
              <p className={p}>
              Boost your brand visibility online and enjoy additional revenue streams introduced uniquely to each  brand             </p>
            </div>
          </div>
        </div>

      </Slider>
    </section>
  )
}

export default WhyUS
