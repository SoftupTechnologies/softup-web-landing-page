import React, { useState } from "react"
import accordionStyles from "./accordion.module.css"
import PropTypes from "prop-types"

const accSlides = [
  {
    title: "services",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: "expertise",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: "portfolio",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: "career",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: "blog",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
]

export const AccordionSlide = ({
  title,
  content,
  slideInfo,
  setSlideInfo,
  componentId,
}) => {
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

  const toggleAccordion = () => {
    setSlideInfo({
      activeSlideNumber: componentId,
    })
  }

  return (
    <div onClick={toggleAccordion} className={style.slideContainer}>
      <div className={style.rotateStyle}>
        <div className={style.title}>{title}</div>
      </div>
      <div className={style.slideContent}>{content}</div>
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
          slideInfo={slideInfo}
          setSlideInfo={setSlideInfo}
        />
      ))}
    </div>
  )
}

AccordionSlide.propTypes = {
  title: PropTypes.string,
  content: PropTypes.object,
  slideInfo: PropTypes.object,
  setSlideInfo: PropTypes.func,
  componentId: PropTypes.number,
}
