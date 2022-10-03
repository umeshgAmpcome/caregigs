// import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import { Link } from "gatsby"
import logo from "../images/caregigs_logo-2.svg"
// import { FaBeer } from "react-icons/fa"
export default function Navbar() {
  // const data = useStaticQuery(graphql`
  //   {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <nav>
      <div className="navbar">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/professionals">Professionals</Link>
          <Link to="/nursingfacilities">Nursing Facilities</Link>
          <Link to="/company">Company</Link>
          <Link to="/contactus">Contact Us</Link>
        </div>
        <div className="joinlink">
          <Link to="/contactus" className="btn">
            Join With Us
          </Link>
        </div>
      </div>
    </nav>
  )
}
