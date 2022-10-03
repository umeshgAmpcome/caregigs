import React from "react"
import Carousel from "react-bootstrap/Carousel"
import "bootstrap/dist/css/bootstrap.min.css"

export default function Cardcorosol() {
  return (
    <div className="carousol">
      <Carousel variant="dark">
        <Carousel.Item className="carousol_item" interval={2000}>
          <div className="profile-header">
            <div className="profile_image">
              <img
                src="https://www.caregigs.co/wp-content/uploads/2022/07/caregigs_phone.png"
                style={{
                  width: "100%",
                  height: "60vh",
                  marginLeft: "5%",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                alt="img"
              />
            </div>

            <div className="profile_content">
              <p className="content_head">DEFINE YOUR FUTURE </p>
              <h1>Set your schedule and earn more money.</h1>
              <p>
                Caregigs helps Registered Nurses, Certified Nursing Assistants,
                Medical Assistants, and Surgical and Radiologic Technologists
                connect with local healthcare facilities for flexible shifts.
                Whether you want a part-time job or full-time work, Caregigs has
                promising opportunities for you.
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className="carousol_item" interval={2000}>
          <div className="profile-header">
            <div className="profile_image">
              <img
                src="https://www.caregigs.co/wp-content/uploads/2022/07/caregigs_iphone2.png"
                style={{
                  width: "90%",
                  height: "60vh",
                  marginLeft: "5%",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  // border: "2px solid pink",
                }}
                alt="img"
              />
            </div>
            <div className="profile_content">
              <p className="content_head">LOCAL SHIFTS </p>
              <h1>Choose where and how often you work.</h1>
              <p>
                Simply download the Caregigs App, choose a facility, and pick a
                shift—it’s that simple! You can even set up notifications for
                when new shifts are available at your favorite facilities, so
                you never miss out on an opportunity.
              </p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
