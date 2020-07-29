/* eslint-disable */
import { useTranslation } from "react-i18next"
import React, { useState } from "react"
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
  const [selectedTab, setSetSelectedTab] = useState({
    selected: data[0]?.tabName
  })

  const itemToBeRendered = data.find(
    item => item.tabName === selectedTab.selected
  )

  const tabTitles = (
    <div className={"tabTitles"}>
      {data.map((item, index) => {
        let classes = classNames({
          tabName: true,
          enabledTitle: item.tabName === selectedTab.selected
        })
        return (
          <div
            defaultValue={item.tabName}
            onClick={() => {
              setSetSelectedTab({ selected: item.tabName })
            }}
            key={index}
            className={classes}
            id={item.tabName}
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
      <TabContent itemToBeRendered={itemToBeRendered}/>
    </div>
  )
}

TabContent.propTypes = {
  itemToBeRendered: PropTypes.object
}

WideTabs.propTypes = {
  data: PropTypes.array
}
