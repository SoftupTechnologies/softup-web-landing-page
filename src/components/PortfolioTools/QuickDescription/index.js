import React from "react"
import "./quick-description.scss"

export const QuickDescription = ({ data }) => {
  return data.map((item, index) => (
    <div key={index} className={"quickDescriptionDiv displayWithGrid"}>
      <div className={"title"}>{item.title}</div>
      <div className={"description"}>{item.description}</div>
    </div>
  ))
}
