import React, { useState } from "react"
import "./accordion.scss"
import PropTypes from "prop-types"
import { CompanyNumbers } from "../CompanyNumbers"
import { Link } from "gatsby"
import { useTranslation } from "react-i18next"
import navData from "../../../content/page-data.json"
import classNames from "classnames"
import { generateContent } from "../helpers"

export const AccordionSlide = ({
  link,
  number,
  title,
  description,
  slideInfo,
  setSlideInfo,
  componentId,
  content
}) => {
  const { t } = useTranslation()
  const slideIsActive = slideInfo.activeSlideNumber === componentId
  const uninitializedSlides = slideInfo.activeSlideNumber === null

  let sliderDivClasses = classNames({
    slideContainer: true,
    inactive: !slideIsActive,
    uninitialized: uninitializedSlides,
  })

  let titleClasses = classNames({
    title: true,
    active: slideIsActive,
    inactive: !slideIsActive,
  })

  const toggleAccordion = () => {
    setSlideInfo({
      activeSlideNumber: componentId,
    })
  }

  return (
    <div onClick={toggleAccordion} className={sliderDivClasses}>
      <div className={"number"}>{number}</div>
      <div className={"contentAndTitle"}>
        <div className={titleClasses}>
          <Link to={link}>{t(title)}</Link>
        </div>
        {slideIsActive ? (
          <React.Fragment>
            <div className={"slideContent"}>{description}</div>
            {generateContent(content)}
          </React.Fragment>
        ) : null}
      </div>
    </div>
  )
}

export const Accordion = () => {
  const [slideInfo, setSlideInfo] = useState({ activeSlideNumber: null })

  return (
    <div className={"accordionContainer"}>
      {navData.map((slide, index) => (
        <AccordionSlide
          link={slide.link}
          componentId={index}
          key={index}
          title={slide.title}
          description={slide.accordionContent.description}
          number={slide.number}
          slideInfo={slideInfo}
          setSlideInfo={setSlideInfo}
          content={slide.accordionContent.content}
        />
      ))}
    </div>
  )
}

export const DesktopAccordionMenu = () => {
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
  description: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  slideInfo: PropTypes.object,
  setSlideInfo: PropTypes.func,
  componentId: PropTypes.number,
  content: PropTypes.array,
}
