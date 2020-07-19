import React, { useState } from "react"
import accordionStyles from "./accordion.module.css"
import PropTypes from "prop-types"

const accSlides = [
  {
    title: "Title 1",
    content: <h4>sjdfkjslkdfjkalsjdfklajslkdfjsdkljfklsdfjklsd</h4>,
  },
  {
    title: "Title 2",
    content: <h4>sjdfkjslkdfjkalsjdfklajslkdfjsdkljfklsdfjklsd</h4>,
  },
  {
    title: "Title 3",
    content: <h4>sjdfkjslkdfjkalsjdfklajslkdfjsdkljfklsdfjklsd</h4>,
  },
  {
    title: "Title 3",
    content: <h4>sjdfkjslkdfjkalsjdfklajslkdfjsdkljfklsdfjklsd</h4>,
  },
  {
    title: "Title 3",
    content: <h4>sjdfkjslkdfjkalsjdfklajslkdfjsdkljfklsdfjklsd</h4>,
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
    title: accordionStyles.disabledTitle,
    slideContent: accordionStyles.disabledContent,
  };

  if (slideInfo.activeSlideNumber === componentId) {
    style.slideContainer = accordionStyles.enabledContainer
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
      <div className={style.title}>{title}</div>
      <div
        className={style.slideContent}
      >
        {content}
      </div>
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
