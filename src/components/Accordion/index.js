import React, { useState } from "react"
import "./accordion.scss"
import PropTypes from "prop-types"
import { CompanyNumbers } from "../CompanyNumbers"
import { Link } from "gatsby"
import { accSlides } from "../../data"

export const AccordionSlide = ({
  link,
  number,
  title,
  content,
  slideInfo,
  setSlideInfo,
  componentId,
}) => {
  let fillerDiv = <></>

  let style = {
    slideContainer: "disabledContainer",
    title: "disabledTitle",
    slideContent: "disabledContent",
  }

  if (slideInfo.activeSlideNumber === componentId) {
    style.slideContainer = "enabledContainer"
    style.contentAndTitle = "enabledContentAndTitle"
    style.title = "enabledTitle"
    style.slideContent = "enabledContent"
    fillerDiv = <div className={"bottom"} />
  }

  if (slideInfo.activeSlideNumber === null) {
    style.slideContainer = "initialContainer"
    style.title = "initialTitle"
    style.slideContent = "disabledContent"

    fillerDiv = <div className={"bottom"} />
  }

  const toggleAccordion = () => {
    setSlideInfo({
      activeSlideNumber: componentId,
    })
  }

  return (
    <div onClick={toggleAccordion} className={style.slideContainer}>
      <div className={"number"}>{number}</div>
      <div className={style.contentAndTitle}>
        <div className={style.title}>
          <Link to={link}>{title}</Link>
        </div>
        <div className={style.slideContent}>{content}</div>
      </div>
      {fillerDiv}
    </div>
  )
}

export const Accordion = () => {
  const [slideInfo, setSlideInfo] = useState({ activeSlideNumber: null })

  return (
    <div className={"accordionContainer"}>
      {accSlides.map((slide, index) => (
        <AccordionSlide
          link={slide.link}
          componentId={index}
          key={index}
          title={slide.title}
          content={slide.content}
          number={slide.number}
          slideInfo={slideInfo}
          setSlideInfo={setSlideInfo}
        />
      ))}
    </div>
  )
}

export const AccordionMenu = () => {
  return (
    <div id={"accordion-menu"} className={"accordionMenuContainer"}>
      <CompanyNumbers />
      <Accordion />
    </div>
  )
}

AccordionSlide.propTypes = {
  link: PropTypes.string,
  number: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.object,
  slideInfo: PropTypes.object,
  setSlideInfo: PropTypes.func,
  componentId: PropTypes.number,
}
