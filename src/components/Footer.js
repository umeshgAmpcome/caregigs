import React from "react"
import { BsInstagram, BsLinkedin, BsFacebook, BsTwitter } from "react-icons/bs"
import { IconContext } from "react-icons"

// import { AiFillLinkedin } from "react-icons/ai"

export default function Footer() {
  return (
    <footer className="footer" data-aos="fade-up">
      <div className="footer_inner ">
        <div className="inner_child1 foot">
          <div className="child1_upper">
            <h2 className="">Caregigs</h2>
            <p>
              We're on a mission to make healthcare more fast, flexible and
              rewarding
            </p>
          </div>
          <div className="child1_lower">
            <IconContext.Provider value={{ size: "1.5em" }}>
              <a
                href="https://www.facebook.com/Caregigs-109072338566994"
                target="_blank"
                rel="noopener"
              >
                <BsFacebook />
              </a>
              <a href="https://twitter.com/caregigs" target="_blank">
                <BsTwitter />
              </a>
              <a href="https://www.instagram.com/caregigs_co/" target="_blank">
                <BsInstagram />
              </a>
              <a
                href="https://www.linkedin.com/company/caregigs/"
                target="_blank"
              >
                <BsLinkedin />
              </a>
            </IconContext.Provider>
          </div>
        </div>
        <div className="inner_child2 foot">
          <h4 className="">Company</h4>
          <p>
            <a href="/">Home</a>
          </p>
          <p>
            <a href="/professionals">Professionals</a>
          </p>
          <p>
            <a href="/nursingfacilities">Nursing Facilities</a>
          </p>
        </div>
        <div className="inner_child3 foot">
          <h4 className="">Support</h4>
          <p>
            <a href="/company">Company</a>
          </p>
          <p>
            <a href="/contactus">Contact Us</a>
          </p>
          <p>
            <a href="https://www.caregigs.co/privacy-policy/">Privacy Policy</a>
          </p>
          <p>
            <a href="https://www.caregigs.co/terms-of-use/">Terms of Use</a>
          </p>
        </div>
        <div className="inner_child4 foot">
          <h4>Need Help</h4>
          <h5>contact Us</h5>
          <p>+1 (435) 246-0763</p>
          <h5>Need live support</h5>
          <p>support@caregigs.co</p>
        </div>
      </div>
    </footer>
  )
}
