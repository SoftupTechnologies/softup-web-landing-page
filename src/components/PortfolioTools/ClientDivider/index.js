import React from "react"
import "./client-divider.scss"

export const ClientDivider = ({ data }) => {
  return data.map((item, index) => (
    <div key={index} className={"clientDividerGrid displayWithGrid"}>
      <div className={"clientDividerDiv"}>
        <div className={"client"}>CLIENT</div>
        <div className={"separator"} />
        <div className={"clientName"}>{item.client}</div>
      </div>
    </div>
  ))
}
