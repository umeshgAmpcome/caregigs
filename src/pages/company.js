import React from "react"
import Layout from "../components/Layout"

export default function company() {
  return (
    <Layout>
      <div className="company">
        <div className="inner_child1 child" data-aos="fade-up">
          <div className="left content">
            <p className="content_head">ABOUT US </p>

            <h2 className="text">
              At Caregigs, we’re building a sustainable future for healthcare
              professionals.
            </h2>
            <p>
              We’re a cutting-edge, tech-enabled health-care staffing platform
              with a vision for the future of healthcare in the United States.
              We schedule and match &nbsp;
              <a href="/professionals">health-care professionals </a> to meet
              the staffing needs of hospitals and nursing homes across the
              country using our proprietary technology platform. Our goal is to
              give nurses and other health-care professionals the freedom to
              choose from a variety of exciting possibilities that match their
              talents and abilities. We also assist healthcare businesses in
              filling and managing open positions by providing access to a
              varied pool of high-quality health care professionals.
            </p>
          </div>
          <div className="right img"></div>
        </div>
        <div className="inner_child2 child" data-aos="fade-up">
          <div className="left img"></div>
          <div className="right content">
          <p className="content_head">OUR PRINCIPLE</p>
            <h2 className="text">
              We believe that everyone should have the opportunity to make a
              difference in the live of others.
            </h2>
            <p>
              Caregigs was founded on the principle that nurses should be able
              to balance their personal lives with their professional lives.
              That’s why we put them first—our entire business model is built
              around our commitment to helping nurses find flexible work
              opportunities that fit into their lives without compromising
              quality or safety for their patients. We’re also committed to
              helping hospitals empower themselves by making smarter decisions
              about how they manage their full-time and part-time staff.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
