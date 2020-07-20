import React, { useState } from "react"
import accordionStyles from "./accordion.module.css"
import PropTypes from "prop-types"

const accSlides = [
  {
    number: "01",
    title: "services",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    number: "02",
    title: "expertise",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    number: "03",
    title: "portfolio",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    number: "04",
    title: "career",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    number: "05",
    title: "blog",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
]

export const AccordionSlide = ({
  number,
  title,
  content,
  slideInfo,
  setSlideInfo,
  componentId,
}) => {
  let fillerDiv = <></>

  let style = {
    slideContainer: accordionStyles.disabledContainer,
    rotateStyle: accordionStyles.enabledRotation,
    title: accordionStyles.disabledTitle,
    slideContent: accordionStyles.disabledContent,
  }

  if (slideInfo.activeSlideNumber === componentId) {
    style.slideContainer = accordionStyles.enabledContainer
    style.rotateStyle = accordionStyles.disabledRotation
    style.title = accordionStyles.enabledTitle
    style.slideContent = accordionStyles.enabledContent
  }

  if (slideInfo.activeSlideNumber === null) {
    style.slideContainer = accordionStyles.initialContainer
    style.rotateStyle = accordionStyles.disabledRotation
    style.title = accordionStyles.initialTitle
    style.slideContent = accordionStyles.disabledContent

    fillerDiv = <div />
  }

  const toggleAccordion = () => {
    setSlideInfo({
      activeSlideNumber: componentId,
    })
  }

  return (
    <div onClick={toggleAccordion} className={style.slideContainer}>
      <div className={accordionStyles.number}>{number}</div>
      <div className={style.rotateStyle}>
        <div className={style.title}>{title}</div>
      </div>
      <div className={style.slideContent}>{content}</div>
      {fillerDiv}
    </div>
  )
}

export const Accordion = () => {
  const [slideInfo, setSlideInfo] = useState({ activeSlideNumber: null })

  return (
    <div className={accordionStyles.accordionContainer}>
      {accSlides.map((slide, index) => (
        <AccordionSlide
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

AccordionSlide.propTypes = {
  number: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.object,
  slideInfo: PropTypes.object,
  setSlideInfo: PropTypes.func,
  componentId: PropTypes.number,
}
