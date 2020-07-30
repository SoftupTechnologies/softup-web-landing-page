import React from "react"
import { WideTabs } from "./WideTabs"
import { NumberedParagraph } from "./NumberedParagraph"
import { SlideLinks } from "./Accordion/SlideLinks"
import { PresentationTiles } from "./PresentationTiles"

export const formatNumber = num => {
  const stringNum = parseInt(num, 10).toString()
  if (stringNum.length <= 2) {
    return `0${stringNum}`
  }
  return stringNum
}

// eslint-disable-next-line no-undef
export const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

let componentContainer = {
  horizontalTabs: WideTabs,
  numberedParagraph: NumberedParagraph,
  slideLinks: SlideLinks,
  presentationTiles: PresentationTiles,
}

export const generateContent = pageContent => {
  const components = pageContent?.map((content, index) => {
    const DesiredComponent = componentContainer[content.component]
    return <DesiredComponent key={index} data={content.data} />
  })
  return <React.Fragment>{components}</React.Fragment>
}

export const breakLongWords = str => {
  const words = str.split(/\s+/)
  const container = []
  let line = ""
  words.forEach((word, index) => {
    if (line !== "") {
      line = line + "<br/>" + word
    } else {
      line = word
    }
    if (line.length > 8 || index === words.length - 1) {
      container.push(line)
      line = ""
    }
  })
  return <div dangerouslySetInnerHTML={{ __html: container.join(" ") }} />
}
