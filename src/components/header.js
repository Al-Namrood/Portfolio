import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "./header.css"
import Navbar from "./navbar"
const Header = () => (
  <header className="header">
    <StaticImage
      src="../images/test.jpg"
      className="header"
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="Image made by https://unsplash.com/@ronwhitaker "

    />
    <div class="absolute top-10 left-10 ">
      <h2 className="text-2xl text-white font-semibold">BP</h2>
    </div>
    <Navbar />
  </header>
)



export default Header
