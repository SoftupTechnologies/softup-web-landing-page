import { useTranslation } from "react-i18next"
import React from "react"
import { generateContent } from "../helpers"
import PropTypes from "prop-types"
import "./normal-paragraph.scss"

export const NormalParagraph = ({ data }) => {
  const { t } = useTranslation()
  return (
    <div className={"displayWithGrid"}>
      <div className={"normalParagraphDiv"}>
        {data?.map((item, index) => {
          return (
            <div className={"paragraph"} key={index}>
              <div className={"titleAndContent"}>
                <div className={"paragraphTitle"}>{t(item.title)}</div>
                <div className={"paragraphContent"}>
                  {generateContent(item.content)}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

NormalParagraph.propTypes = {
  data: PropTypes.array,
}
