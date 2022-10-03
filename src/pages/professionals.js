import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Cardcorosol from "./professionals/Cardcorosol"
import SettingsIcon from "@mui/icons-material/Settings"
import CheckIcon from "@mui/icons-material/Check"
import MapsUgcRoundedIcon from "@mui/icons-material/MapsUgcRounded"

export default function professionals() {
  return (
    <Layout>
      <div className="professionals" >
        <div className="inner">
          <div id="inner_child1" data-aos="fade-up">
            <div className="left">
              <h1>Take control of your life.</h1>
              <p>
                We’ve helped thousands of nurses focus on what matters most:
                taking care of their patients and their families.
              </p>
              <div className="applybtn">
                <Link
                  href="https://apps.apple.com/in/app/caregigs-nursing-jobs/id1637022291"
                  target="_blank"
                >
                  IOS App
                </Link>
                <Link
                  href="https://play.google.com/store/apps/details?id=com.caregigs.co"
                  target="_blank"
                >
                  Android App
                </Link>
              </div>
            </div>
            <div className="right"></div>
          </div>
          <div id="inner_child2" data-aos="fade-up">
            <div className="child2_content">
              <CheckIcon />
              <h3>Freedom</h3>
              <p>
                Chart your financial future with no contracts or long term
                commitments.
              </p>
            </div>
            <div className="child2_content">
              <MapsUgcRoundedIcon />
              <h3>Flexibility</h3>
              <p>
                You get the flexibility to set your own schedule and earn what
                you deserve.
              </p>
            </div>
            <div className="child2_content ">
              <SettingsIcon />
              <h3>Career Control</h3>
              <p>
                Whether you want a part-time job or full-time work, Caregigs has
                promising opportunities for you
              </p>
            </div>
          </div>
          <div id="inner_child3" data-aos="fade-up">
            <Cardcorosol />
          </div>
        </div>
      </div>
    </Layout>
  )
}
