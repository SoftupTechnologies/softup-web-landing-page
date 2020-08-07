import React from "react"
import "./quick-description.scss"
import PropTypes from "prop-types"

export const QuickDescription = ({ data }) => {
  return (
    <div className={"quickDescriptionDiv displayWithGrid"}>
      <div className={"title"}>{data.title}</div>
      <div className={"description"}>
        <pre>{data.description}</pre>
      </div>
    </div>
  )
}

QuickDescription.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }),
}
