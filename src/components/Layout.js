import React from "react"
import Navbar from "./Navbar"
import "../styles/global.css"
import "../styles/Layout/Layout.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import Footer from "./Footer"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

export default function Layout({ children }) {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    })
  })
  return (
    <div className="layout">
      <Navbar />
      <div className="content">{children}</div>
      <Footer />
    </div>
  )
}
