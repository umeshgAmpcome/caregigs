import React from "react"

export default function ResNav() {
  // const { title } = data.site.siteMetadata
  // const hamburger = document.querySelector(".hamburger")
  // const links = document.querySelector(".links")
  // hamburger.addEventListener("click", () => {
  //   hamburger.classList.toggle("active")
  //   links.classList.toggle("active")
  // })
  // document.querySelectorAll(".links").forEach(n =>
  //   n.addEventListener("click", () => {
  //     hamburger.classList.remove("active")
  //     links.classList.remove("active")
  //   })
  // )
  return (
    <div>
      <nav>
        <div className="hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </div>
  )
}
