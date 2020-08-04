import React from "react"
import PropTypes from "prop-types"
import "./paragraph-and-image.scss"
import { Image } from "../../image"
import { isMobile } from "../../helpers"
import classNames from "classnames"

export const ParagraphAndImage = ({ data }) => {
  let classes = classNames({
    paragraphAndImageDiv: true,
    right: data.imagePosition === "right" && !isMobile,
    left: data.imagePosition === "left" && !isMobile,
  })

  return (
    <div className={"displayWithGrid"}>
      <div className={classes}>
        <div className={"pImage"}>
          <Image filename={data.imageName} />
        </div>
        <div>
          <div className={"title"}>{data.title}</div>
          <div className={"content"}>
            {data.paragraphs.map((para, index) => (
              <div key={index} className={"paragraph"}>
                {para}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

ParagraphAndImage.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    imageName: PropTypes.string,
    imagePosition: PropTypes.oneOf(["left", "right"]),
    paragraphs: PropTypes.arrayOf(PropTypes.string),
  }),
}
