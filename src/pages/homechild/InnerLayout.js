import React from "react"
import HomechildNav from "./HomechildNav"

export default function InnerLayout({ children }) {
  return (
    <div className="layout">
      <HomechildNav />
      <div className="content">{children}</div>
    </div>
  )
}
