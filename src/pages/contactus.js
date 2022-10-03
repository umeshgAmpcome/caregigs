import React from "react"
import Layout from "../components/Layout"

export default function contactus() {
  return (
    <Layout>
      <div className="contact">
        <div className="inner_contact1" data-aos="fade-up">
          <h1>How Can WE Help?</h1>
          <h2>Get in touch and let us know how we can help.</h2>
          <div className="inner_contact2">
            <div className="box">
              <img
                src="https://images.ctfassets.net/k0lk9kiuza3o/2lyAPMRxz8pdvkah5K6NFp/14203e7358e18e312b30c9674d8e72f1/icon-checkmark.svg"
                alt=""
              />
              <h4>About Us </h4>
              <p>
                We love our customers, and we want to make sure that you get the
                best possible experience from our company.
              </p>
            </div>
            <div className="box">
              <img
                src="https://images.ctfassets.net/k0lk9kiuza3o/4hDDf32o6Lz7q8SKL4jpia/2b322b580a84194f8b3fdec1ef86c264/Group_130.svg"
                alt="handshake"
              />
              <h4>Help & Support</h4>
              <p>
                If you need help with any aspect of Caregigs, please submit the
                form below. Our expert representative will be in touch within 24
                hours to assist you.
              </p>
            </div>
            <div className="box">
              <img
                src="https://images.ctfassets.net/k0lk9kiuza3o/3Mv3JjaDAcyVKHi5yCP6UN/4ba88dbd08a7c1e3f8bc2231c9858786/computer_shield.svg"
                alt=""
              />
              <h4>Media and Press</h4>
              <p>Download the Caregigs App to Schedule the Appoinment</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
