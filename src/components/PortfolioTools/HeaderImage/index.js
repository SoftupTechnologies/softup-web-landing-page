import React from "react"
import { Image } from "../../image"
import "./header-image.scss"

export const HeaderImage = ({ data }) => {
  return data.map((item, index) => (
    <div key={index} className={"headerImageDiv"}>
      <div className={"headerImage"}>
        <Image filename={item.imageFileName} />
      </div>
    </div>
  ))
}
