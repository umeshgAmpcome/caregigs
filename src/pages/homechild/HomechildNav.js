import React from "react"

import { Link } from "gatsby"

export default function HomechildNav() {
  return (
    // <nav>
      <div id="_child5">
        <Link to="/hospitalanhealth">Hospital and Health</Link>
        <Link to="homechild/skillednursing">Skilled Nursing Facilities</Link>
        <Link to="homechild/rehabilitation">Rehabilitation Facilities</Link>
        <Link to="homechild/seniorandassisted">Senior and Assisted Living</Link>
        <Link to="homechild/outpatient">Outpatient Facilities</Link>
      </div>
    // </nav>
  )
}
