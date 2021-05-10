import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const OurStory = props => {
  const data = useStaticQuery(graphql`
    {
      banner: file(relativePath: { eq: "bg.png" }) {
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
  const banner = data.banner.childImageSharp.fluid

  return (
    <section className="ourStory ">
      <Img fluid={data.banner.childImageSharp.fluid} className="banner" />
      <div className="bottomDiv text-charcoal  lg:flex justify-items-center	 wrap justify-center items-stretch w-full p-10 md:p-16 lg:p-20 xl:p-44 2xl:p-60">
        <div className="text lg:w-1/2 lg:px-10 lg:flex flex-col items-start justify-between">
        {/* <div className="topText  "> */}
          <h1 className="text-2xl sm:text-2xl lg:text-3xl ">Our Story</h1>
          <p className="sm:text-lg lg:text-lg xl:w-4/5">
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
              to="https://www.deliveryhero.com/"
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
