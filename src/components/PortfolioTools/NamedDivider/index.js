import React from "react"
import "./named-divider.scss"

export const NamedDivider = ({ data }) => {
  return data.map((item, index) => (
    <div key={index} className={"clientDividerGrid displayWithGrid"}>
      <div className={"clientDividerDiv"}>
        <div className={"client"}>CLIENT</div>
        <div className={"separator"} />
      </div>
    </div>
  ))
}
