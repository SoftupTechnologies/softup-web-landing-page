import { useTranslation } from "react-i18next"
import React from "react"
import classNames from "classnames"
import { breakLongWords, generateContent } from "../helpers"
import PropTypes from "prop-types"
import "./wide-tabs.scss"

const TabContent = ({ itemToBeRendered }) => {
  return (
    <div className={"tabContent"} key={Math.random()}>
      {generateContent(itemToBeRendered.content)}
    </div>
  )
}

export const WideTabs = ({ data }) => {
  const { t } = useTranslation()
  const windowLocHash = window.location.hash.slice(
    1,
    window.location.hash.length
  ) || data[0].slug

  const itemToBeRendered = data.find(item => item.slug === windowLocHash)

  const tabTitles = (
    <div className={"tabTitles"} id={itemToBeRendered.slug}>
      {data.map((item, index) => {
        let classes = classNames({
          tabName: true,
          enabledTitle: item.slug === windowLocHash,
        })
        return (
          <div
            onClick={() => {
              window.location.hash = "#" + item.slug
            }}
            key={index}
            className={classes}
          >
            {breakLongWords(t(item.tabName))}
          </div>
        )
      })}
    </div>
  )

  return (
    <div className={"wideTabsDiv"}>
      {tabTitles}
      <TabContent itemToBeRendered={itemToBeRendered} />
    </div>
  )
}

TabContent.propTypes = {
  itemToBeRendered: PropTypes.object,
}

WideTabs.propTypes = {
  data: PropTypes.array,
}
