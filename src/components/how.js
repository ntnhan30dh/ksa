import React from "react"
import location from "../images/logo_locations.png"
import delivery from "../images/logo_delivery.png"
import plug from "../images/logo_plug.png"
import marketing from "../images/logo_marketing.png"
import tell from "../images/logo_tell.png"

const How = () => {
  const card ="my-10 sm:flex sm:w-full md:w-1/2"
  const text = "sm:w-2/3 md:w-1/2 sm:ml-10"
  const logoDiv = " w-20 h-20 rounded-full bg-lipstick p-4 flex justify-center"
  const img = "my-auto"
   const h4 ="pt-6"
  return (
    <section
      className="howContainer text-charcoal w-full px-10 md:px-16 lg:px-20 xl:px-44 2xl:px-72 bg-lightGrey py-10 xsm:py-20 lg:my-20"
      id="how"
    >
      <h1 className="text-2xl sm:text-2xl lg:text-3xl  2xl:pt-0"> How It Works</h1>
      <div className="cards md:flex flex-wrap 	 w-full">
        <div className={card}>
          <div className={logoDiv}>
            <img src={location} alt="logo" />
          </div>
          <div className={text}>
            <h4 className={h4}>Best Locations</h4>
            <p> Data insights are used to identify top locations with hight consumer density and supply gap</p>
          </div>
        </div>
        <div className={card}>
          <div className={logoDiv}>
            <img className={img} src={delivery} alt="logo" />
          </div>
          <div className={text}>
            <h4 className={h4}>Plug & Play Kitchens</h4>
            <p> Delivery-only kitchens with delivery optimized layout and staffing</p>
          </div>
        </div>
        <div className={card}>
          <div className={logoDiv}>
            <img className="" src={plug} alt="logo" />
          </div>
          <div className={text}>
            <h4 className={h4}>Delivery Optimised</h4>
            <p> Expand to another area/location with minimal CAPEX spends/Investments</p>
          </div>
        </div>

        <div className={card}>
          <div className={logoDiv}>
            <img className="" src={marketing} alt="logo" />
          </div>
          <div className={text}>
            <h4 className={h4}>Marketing Support</h4>
            <p> Increase your online demand with our exclusive delivery packages</p>
          </div>
        </div>

        <div className={card}>
          <div className={logoDiv}>
            <img className="" src={tell} alt="logo" />
          </div>
          <div className={text}>
            <h4 className={h4}>Let's get to know you and we will tell you more</h4>
          </div>
        </div>
      </div>
    </section>
  )
}

export default How
