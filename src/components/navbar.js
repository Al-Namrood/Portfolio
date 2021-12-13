import * as React from "react"
import { Link } from "gatsby"
import "./navbar.css"

const Navbar = () => (
    <nav className="flex">
        <ul className="absolute top-10 right-10 flex font-semibold text-white mx-2 text-lg uppercase">
            <li className="mx-2"><Link to="/">About</Link></li>
            <li className="mx-2"><Link to="/">Experiences</Link></li>
            <li className="mx-2"><Link to="/">Projects</Link></li>
            <li className="mx-2"><Link to="/">Contact</Link></li>
        </ul>
    </nav>
)

export default Navbar
