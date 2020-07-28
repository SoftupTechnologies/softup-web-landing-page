import { useTranslation } from "react-i18next"
import React from "react"
import { formatNumber } from "../helpers"
import PropTypes from "prop-types"
import "./numbered-paragraph.scss"

export const NumberedParagraph = ({ data }) => {
  const { t } = useTranslation()
  return (
    <div className={"paragraphDiv"}>
      {data?.items.map((item, index) => {
        return (
          <div className={"paragraph"} key={index}>
            <div className={"paragraphNumber"}>{formatNumber(index + 1)}</div>
            <div className={"titleAndContent"}>
              <div className={"paragraphTitle"}>{t(item.title)}</div>
              <div className={"paragraphContent"}>{t(item.description)}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

NumberedParagraph.propTypes = {
  data: PropTypes.object,
}
