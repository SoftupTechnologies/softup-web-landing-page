import React from "react"
import "./client-name.scss"
import PropTypes from "prop-types"

export const ClientName = ({ data }) => {
  return (
    <div className={"displayWithGrid"}>
      <div className={"clientNameDiv"}>{data[0].name}</div>
    </div>
  )
}

ClientName.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ),
}
