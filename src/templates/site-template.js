/* eslint-disable */
import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import MenuNavigation from "../components/MenuNavigation"
import { useTranslation } from "react-i18next"
import "./site.scss"
import classNames from "classnames"

const generateContent = pageContent => {
  const components = pageContent?.map((content, index) => {
    const DesiredComponent = componentContainer[content.component]
    return <DesiredComponent key={index} data={content.data} />
  })
  return <React.Fragment>{components}</React.Fragment>
}

const TabContent = ({ itemToBeRendered }) => {
  return (
    <div className={"tabContent"} key={Math.random()}>
      {generateContent(itemToBeRendered.content)}
    </div>
  )
}

const WideTabs = ({ data }) => {
  const [selectedTab, setSetSelectedTab] = useState({
    selected: data[0]?.tabName,
  })
  const tabTitles = (
    <div className={"tabTitles"}>
      {data.map((item, index) => {
        let classes = classNames({
          tabName: true,
          enabledTitle: item.tabName === selectedTab.selected,
        })
        return (
          <div
            onClick={() => setSetSelectedTab({ selected: item.tabName })}
            key={index}
            className={classes}
          >
            {item.tabName}
          </div>
        )
      })}
    </div>
  )
  const itemToBeRendered = data.find(
    item => item.tabName === selectedTab.selected
  )
  return (
    <div className={"wideTabsDiv"}>
      {tabTitles}
      <TabContent itemToBeRendered={itemToBeRendered} />
    </div>
  )
}

const formatNumber = num => {
  const stringNum = parseInt(num, 10).toString()
  if (stringNum.length <= 2) {
    return `0${stringNum}`
  }
  return stringNum
}

const NumberedParagraph = ({ data }) => {
  return (
    <div className={"paragraphDiv"}>
      {data?.items.map((item, index) => {
        return (
          <div className={"paragraph"} key={index}>
            <div className={"paragraphNumber"}>{formatNumber(index + 1)}</div>
            <div className={"titleAndContent"}>
              <div className={"paragraphTitle"}>{item.title}</div>
              <div className={"paragraphContent"}>{item.description}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

let componentContainer = {
  horizontalTabs: WideTabs,
  numberedParagraph: NumberedParagraph,
}

const BasicTemplate = ({ pageContext }) => {
  const { t } = useTranslation()
  return (
    <div>
      <MenuNavigation
        menuItems={pageContext.menuItems}
        activeMenuItem={pageContext.title}
      />
      <div className={"bodyTitleDiv"}>
        <div className={"title"}>{t(pageContext.title)}</div>
      </div>
      {generateContent(pageContext?.content)}
    </div>
  )
}

BasicTemplate.propTypes = {
  pageContext: PropTypes.object,
}

export default BasicTemplate
