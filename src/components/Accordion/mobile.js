import React, { useState } from "react"
import "./mobile.scss"
import PropTypes from "prop-types"
import { CompanyNumbers } from "../CompanyNumbers"
import { Link } from "gatsby"
import { useTranslation } from "react-i18next"
import navData from "../../../content/page-data.json"
import classNames from "classnames"
import { SlideLinks } from "./SlideLinks"
import { generateContent } from "../helpers"

export const MobileAccordionSlide = ({
  link,
  number,
  title,
  description,
  slideInfo,
  setSlideInfo,
  componentId,
  content,
}) => {
  const { t } = useTranslation()
  const slideIsActive = slideInfo.activeSlideNumber === componentId
  const uninitializedSlides = slideInfo.activeSlideNumber === null

  let sliderDivClasses = classNames({
    mobileSlideContainer: true,
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
      <div className={"number"}>{number}</div>
    </div>
  )
}

const MobileAccordion = () => {
  const [slideInfo, setSlideInfo] = useState({ activeSlideNumber: null })

  return (
    <div className={"mobileAccordionContainer"}>
      {navData.map((slide, index) => (
        <MobileAccordionSlide
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

export const MobileAccordionMenu = () => {
  return (
    <div id={"accordion-menu"} className={"mobileAccordionMenuContainer"}>
      <CompanyNumbers />
      <MobileAccordion />
    </div>
  )
}

MobileAccordionSlide.propTypes = {
  link: PropTypes.string,
  number: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  slideInfo: PropTypes.object,
  setSlideInfo: PropTypes.func,
  componentId: PropTypes.number,
  content: PropTypes.array,
}