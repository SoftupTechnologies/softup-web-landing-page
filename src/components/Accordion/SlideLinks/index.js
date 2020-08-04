import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./slide-links.scss"

export const SlideLinks = ({ data }) => {
  return (
    <div className={"slideLinksDiv"}>
      {data.map((item, index) => (
        <Link key={index} to={item.link} className={"slideItemLink"}>
          {item.name}
          {item.name ? <span className={"arrow"}>→</span> : null}
        </Link>
      ))}
    </div>
  )
}

SlideLinks.propTypes = {
  data: PropTypes.array,
}
