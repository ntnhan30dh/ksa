import React, {useRef} from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import Slider from "react-slick"

const OurStory = props => {
  const data = useStaticQuery(graphql`
    {
      banner1: file(relativePath: { eq: "homePage1.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      banner2: file(relativePath: { eq: "homePage2.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      banner3: file(relativePath: { eq: "homePage3.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      ourStory: file(relativePath: { eq: "ourStory.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  //creating the ref
  const customeSlider = useRef()
  // const gotoNext = () => {
  //   customeSlider.current.slickNext()
  // }

  // const gotoPrev = () => {
  //   customeSlider.current.slickPrev()
  // }

  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  
  }

  return (

    
    <section className="ourStory " >
    <Slider {...settings} ref={customeSlider} className=" ">
      <Img fluid={data.banner1.childImageSharp.fluid} className="banner" />
      <Img fluid={data.banner2.childImageSharp.fluid} className="banner" />
      <Img fluid={data.banner3.childImageSharp.fluid} className="banner" />
      </Slider>
      <div className="bottomDiv text-charcoal  lg:flex justify-items-center	 wrap justify-center items-stretch w-full p-10 md:p-16 lg:p-20 xl:p-44 ">
        <div className="text lg:w-1/2 lg:pr-10 lg:flex flex-col items-start justify-between">
        {/* <div className="topText  "> */}
          <h1 className="text-2xl sm:text-2xl lg:text-3xl " id="story">Our Story</h1>
          <p className="sm:text-lg lg:text-lg 2xl:w-4/5">
            DH Kitchens KSA works with restaurant partners in operating kitchens
            optimized for delivery, revolutionizing the food market. DH Kitchens
            KSA uses data to locate the most suitable areas. We cooperate with
            agencies to find the best real estate and invest in the kitchen
            facility. We identify cuisine gaps and invite the best-fitting top
            performing restaurant partners to expand their business through our
            kitchens.{" "}
          </p>
        {/* </div> */}
          <button className="bg-lipstick rounded-lg p-4 mt-8 flex-shrink-0">
            {" "}
            <Link
              to="/"
              target="_blank"
              className="text-white"
            >
              Get Started
            </Link>{" "}
          </button>
        </div>

        <Img
          fluid={data.ourStory.childImageSharp.fluid}
          className="banner"
          className="mt-10 lg:w-1/2 lg:mt-0"
        />
      </div>
    </section>
  )
}

export default OurStory
