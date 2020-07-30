import React from "react"
import "./presentation-tiles.scss"
import PropTypes from "prop-types"
import { Image } from "../image"

export const PresentationTiles = ({ data }) => {
  const items = data.map((item, index) => {
    return (
      <div key={index} className={"presentationItem"}>
        <div className={"companyLogo"}><Image alt="Gatsby in Space" filename={item.iconFilename}/></div>
        <div className={"companySeparator"}/>
        <div className={"companyName"}>{item.title}</div>
        <div className={"companyDescription"}>{item.description}</div>
      </div>
    )
  })

  return (
    <div className={"presentationWrapper"}>
      <div className={"presentationItemsDiv"}>{items}</div>
    </div>
  )
}

PresentationTiles.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      iconFilename: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string
    })
  )
}
