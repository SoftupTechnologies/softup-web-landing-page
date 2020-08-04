import React from "react"
import "./named-divider.scss"
import PropTypes from "prop-types"

export const NamedDivider = ({ data }) => {
  return (
    <div className={"clientDividerGrid displayWithGrid"}>
      <div className={"clientDividerDiv"}>
        <div className={"client"}>{data.title}</div>
        <div className={"separator"} />
      </div>
    </div>
  )
}

NamedDivider.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
  }),
}
