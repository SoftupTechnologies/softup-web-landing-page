import React from "react"
import ReactMarkdown from "react-markdown"
import PropTypes from "prop-types"
import './markdown-display.scss'

export const MarkdownDisplay = ({ data }) => <ReactMarkdown source={data} />

MarkdownDisplay.propTypes = {
  data: PropTypes.string,
}
