import { useTranslation } from "react-i18next"
import React from "react"
import PropTypes from "prop-types"
import { Image } from "../image"
import "./caseStudies.scss"
import SubmitButton from "../../images/submit.svg"

export const CaseStudies = ({ data }) => {
  const { t } = useTranslation()

  return (
    <>
      <hr className="caseStudies-hr" />
      <div className="displayWithGrid">
        <div className="caseStudies-wrapper">
          <h1 className="caseStudies-title">{t(data.title)}</h1>
          <div className="caseStudies-clients">
            {data?.items.map(item => {
              return (
                <>
                  <div className="caseStudies-client">
                    <div className="image-wrapper">
                      <Image filename={item.iconFilename} />
                    </div>
                    <div className="caseStudies-separator"></div>
                    <h1>{t(item.title)}</h1>
                    <p>{t(item.description)}</p>
                    <div className="caseStudies-navigation">
                      <SubmitButton />
                    </div>
                  </div>
                </>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

CaseStudies.propTypes = {
  data: {
    title: PropTypes.string,
    items: PropTypes.object,
  },
}
