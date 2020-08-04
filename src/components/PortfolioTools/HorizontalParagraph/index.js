import React from "react"
import PropTypes from "prop-types"

export const HorizontalParagraph = ({ data }) => {
  return <div>{data.title}</div>
}

HorizontalParagraph.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
  }),
}
