/* eslint-disable */
import React from "react"
import PropTypes from "prop-types"
import MenuNavigation from "../components/MenuNavigation"
import { useTranslation } from "react-i18next"
import "./site.scss"

const WideTabs = ({data}) => {
  const tabItems = data.map((item, index) => (
    <div key={index} className={"tabName"}>{item.tabName}</div>
  ))
  return (<div className={"tabDiv"}>{tabItems}</div>)
}

let componentContainer = {
  horizontalTabs: WideTabs
}


const generateContent = (pageContent) => {
  const components = pageContent?.map((content, index) => {
    const DesiredComponent = componentContainer[content.component];
    return(
      <DesiredComponent key={index} data={content.data} />
    )
  })
  return(
    <React.Fragment>
      {components}
    </React.Fragment>
  )
}

const BasicTemplate = ({ pageContext }) => {
  const { t } = useTranslation()
  return (
    <div>
      <MenuNavigation menuItems={pageContext.menuItems} />
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
