import React, { useState } from "react"
import "./accordion.scss"
import PropTypes from "prop-types"
import { CompanyNumbers } from "../CompanyNumbers"
import { Link } from "gatsby"

const accSlides = [
  {
    link: "/services",
    number: "01",
    title: "services.",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    link: "/expertise",
    number: "02",
    title: "expertise.",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    link: "/portfolio",
    number: "03",
    title: "portfolio.",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    link: "/career",
    number: "04",
    title: "career.",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    link: "/blog",
    number: "05",
    title: "blog.",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
]

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
