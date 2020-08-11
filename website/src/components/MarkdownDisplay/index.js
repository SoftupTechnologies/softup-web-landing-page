import React from "react"
import ReactMarkdown from "react-markdown"
import PropTypes from "prop-types"
import './markdown-display.scss'

export const MarkdownDisplay = ({ data }) => {
  return (
    <div className={"displayWithGrid"}>
      <div className={"markdownDiv"}>
        <ReactMarkdown source={data} />
      </div>
    </div>
  )
}

MarkdownDisplay.propTypes = {
  data: PropTypes.string,
}
