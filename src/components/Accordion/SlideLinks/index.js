import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

export const SlideLinks = ({ data }) => {
  return data.map((item, index) => (
    <div key={index} className={"slideLinksDiv"}>
      <div className={"slideItemIcon"}>{item.icon}</div>
      <Link to={item.link} className={"slideItemLink"}>
        {item.name}
      </Link>
    </div>
  ))
}

SlideLinks.propTypes = {
  data: PropTypes.array,
}
