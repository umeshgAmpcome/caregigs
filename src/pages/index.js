import { graphql, Link } from "gatsby"
import React, { useEffect } from "react"

import Layout from "../components/Layout"
import "../styles/main.scss"

export default function Home({ children }) {
  
  return (
    <Layout>
      <div className="home">
        <div className="_inner">
          <div id="inner_child1" data-aos="fade-up">
            <div className="left">
              <h2 class="sentence">
                We make healthcare
                <br /> staffing
                <div class="slidingVertical">
                  <span>Fast</span>
                  <span>Flexible</span>
                  <span>Rewarding</span>
                  <span>Caring</span>
                  <span>Helping</span>
                </div>
              </h2>
              <p>
                Be part of the fastest growing healthcare professionals
                community
              </p>
              <div className="applybtn">
                <Link to="#inner_child2">Apply Now</Link>
                <Link to="/register">Hire Staff</Link>
              </div>
            </div>
            <div className="right"></div>
          </div>
          <div id="inner_child2" data-aos="fade-up">
            <div className="left"></div>
            <div className="right">
              <div className="child1 _child">
                <h2>Pre-Diem Nursing Shifts</h2>
                <p>
                  Per-diem shifts are available at skilled nursing facilities,
                  assisted living and rehabilitation centers
                </p>
              </div>
              <div className="child2 _child">
                <h2>Nursing Contracts</h2>
                <p>
                  Contract assignments from 2 weeks to 15 weeks available in all
                  facility types.
                </p>
              </div>
              <div className="child3 _child">
                <h2>Home Health Nursing Shifts</h2>
                <p>
                  Home Health opportunities available to work on a per-diem
                  basis as well as contract assignments.
                </p>
              </div>
            </div>
          </div>
          <div id="inner_child3" data-aos="fade-up">
            <div className="_top">
              <h2>Staffing solutions for every type of provider.</h2>
              <p>
                AI-powered matching and pricing engine provides a seamless
                solution for your staffing challenges with minimal manual
                effort.
              </p>
            </div>
            <div className="_bottom">
              <div className="_bottom_box">
                <p> Hospitals & Health Systems </p>
              </div>
              <div className="_bottom_box">
                <p> Skilled Nursing Facilities</p>
              </div>
              <div className="_bottom_box">
                <p> Rehabilitation Facilities</p>
              </div>
            </div>
          </div>
          <div id="inner_child4" data-aos="fade-up">
            <div className="_inner">
              <h1> It’s time to take your career into your own hands</h1>
              <p>
                With Caregigs, you can chart your financial future with no
                contracts or long term commitments.
              </p>

              <div className="applybtn">
                <Link to="">Apply Now</Link>
                <Link to="">Hire Staff</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "banner.png" }) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
