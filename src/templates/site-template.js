/* eslint-disable */
import React, { useState } from "react"
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

const WideTabs = ({ data }) => {
  const [selectedTab, setSetSelectedTab] = useState({
    selected: data[0].tabName,
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
  const tabContent = (
    <div className={"tabContent"}>
      {data.map((item, index) => {
        const tabEnabled = item.tabName === selectedTab.selected
        let classes = classNames({
          tabContent: true,
          enabledTabContent: tabEnabled,
          disabledTabContent: !tabEnabled,
        })
        return (
          <div key={index} className={classes}>
            {generateContent(item?.content)}
          </div>
        )
      })}
    </div>
  )
  const mainContainer = (
    <div className={"wideTabsDiv"}>
      {tabTitles}
      {tabContent}
    </div>
  )
  return mainContainer
}

const NumberedParagraph = ({ data }) => {
  return (
    <div className={"paragraphDiv"}>
      {data.items.map(item => {
        return (
          <div className={"paragraph"}>
            <div className={"paragraphTitle"}>{item.title}</div>
            <div className={"paragraphContent"}>{item.description}</div>
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
      <MenuNavigation menuItems={pageContext.menuItems} activeMenuItem={pageContext.title}/>
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
