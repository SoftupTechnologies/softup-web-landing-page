import React from "react"
import PropTypes from "prop-types"

export const SlideLinks = ({ data }) => {
  return data.map((item, index) => (
    <div key={index} className={"slideLinksDiv"}>
      <div className={"slideItemIcon"}>{item.icon}</div>
      <div className={"slideItemLink"}>{item.link}</div>
    </div>
  ))
}

SlideLinks.propTypes = {
  data: PropTypes.array,
}
