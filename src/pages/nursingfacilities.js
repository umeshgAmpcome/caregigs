import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"

export default function nursingfacilities() {
  return (
    <Layout>
      <div className="nursing">
        <div className="inner_nursing">
          <div className="inner_child1 child" data-aos="fade-up">
            <div className="left content">
              <h1 className="text">Healthcare Staffing</h1>
              <p>
                We believe there’s a better way to manage your
                <br />
                needs.
              </p>
              <div className="applybtn">
                <Link to="/register">Sign Up </Link>
                <Link to="/contactus">Contact Us </Link>
              </div>
            </div>
            <div className="right img"></div>
          </div>
          <div className="inner_child2 child" data-aos="fade-up">
            <div className="left img"></div>
            <div className="right content">
              <title>schedule</title>
              <h1>Streamline scheduling and shift management</h1>
              <p>
                Caregigs Scheduling is a free scheduling platform that allows
                your staff to view their schedules, pick up shifts, and also
                request for additional staff…all in one place.
              </p>
            </div>
          </div>
          <div className="inner_child3 child" data-aos="fade-up">
            <div className="left content">
              <h5>STAFFING PLATFORM</h5>
              <h1>On-demand Staffing Marketplace</h1>
              <p>
                Caregigs makes it easier than ever before to fill your shifts
                faster—and that means happier nurses who can spend more time
                caring for their patients!
              </p>
            </div>
            <div className="right img"></div>
          </div>
          <div className="inner_child4 child" data-aos="fade-up">
            <div className="bottom">
              <h5>How it works</h5>
              <h1>
                Engage with local professionals directly through the platform.
              </h1>
              <div className="bottom_child1 btchild">
                <h3>Post a Shift</h3>
                <p>
                  Use the Caregigs application to post shifts requesting
                  Registered Nurses, CNAs, Medical Assistants, or Surgical or
                  Radiology Techs.
                </p>
              </div>
              <div className="bottom_child1 btchild">
                <h3>Review Requests</h3>
                <p>
                  Local, flexible, pre-qualified healthcare professionals will
                  request to work in the shift. You review and approve the
                  request from one of the professionals
                </p>
              </div>
              <div className="bottom_child1 btchild">
                <h3>Approve Timecards</h3>
                <p>
                  Once the healthcare professional has completed the shift, we
                  will send the timecards for your approval and once you approve
                  , take care of the payment for the healthcare professional
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
