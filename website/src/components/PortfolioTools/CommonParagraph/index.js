import React from "react"
import PropTypes from "prop-types"
import "./common-paragraph.scss"
import { isMobile } from "react-device-detect"

export const CommonParagraph = ({ data }) => {
  return (
    <div className={"displayWithGrid"}>
      <div
        className={"hParagraphDiv"}
        style={
          data.type === "horizontal" && !isMobile
            ? { flexDirection: "row" }
            : { flexDirection: "column" }
        }
      >
        {data.title && (<div className={"title"}>{data.title}</div>)}
        <div className={"content"}>
          {data.paragraphs.map((para, index) => (
            <div key={index} className={"paragraph"}>
              {para}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

CommonParagraph.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    type: PropTypes.oneOf(["horizontal", "vertical"]),
    paragraphs: PropTypes.arrayOf(PropTypes.string),
  }),
}
