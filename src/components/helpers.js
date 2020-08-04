import React from "react"
import { WideTabs } from "./WideTabs"
import { NumberedParagraph } from "./NumberedParagraph"
import { SlideLinks } from "./Accordion/SlideLinks"
import { PresentationTiles } from "./PresentationTiles"
import { HeaderImage } from "./PortfolioTools/HeaderImage"
import { QuickDescription } from "./PortfolioTools/QuickDescription"
import { NamedDivider } from "./PortfolioTools/NamedDivider"
import { QuickFacts } from "./PortfolioTools/QuickFacts"
import { ClientName } from "./PortfolioTools/ClientName"

export const formatNumber = num => {
  const stringNum = parseInt(num, 10).toString()
  if (stringNum.length <= 2) {
    return `0${stringNum}`
  }
  return stringNum
}

export const isMobile =
  typeof navigator !== "undefined"
    ? /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    : null

let componentContainer = {
  horizontalTabs: WideTabs,
  numberedParagraph: NumberedParagraph,
  slideLinks: SlideLinks,
  presentationTiles: PresentationTiles,
  headerImage: HeaderImage,
  quickDescription: QuickDescription,
  namedDivider: NamedDivider,
  quickFacts: QuickFacts,
  clientName: ClientName,
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
