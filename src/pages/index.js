import React, { useState } from "react"
import Header from "../components/header"
import OurStory from "../components/ourStory"
import How from "../components/how"
import WhyUs from "../components/whyUs"
 import Footer from "../components/footer"
import "../styles/index.scss"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "semantic-ui-css/semantic.min.css"
// import Plx from "react-plx"

export default function Home() {
  // let [menuActive, setmenuActive] = useState(false)
  // let [vh, setVh] = useState(0);

  // const toggleMenu = () => {
  //   setmenuActive(!menuActive)
  // }

  return (
    <div className="pageWrapper ">
      <head>
        <title>DH Kitchens KSA</title>
      </head>

      <Header />
      <OurStory />
      <How />
      <WhyUs />
      <Footer />
    </div>
  )
}
