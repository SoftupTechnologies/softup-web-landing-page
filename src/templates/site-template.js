import React from "react"
import PropTypes from "prop-types"
import MenuNavigation from "../components/MenuNavigation"
import { useTranslation } from "react-i18next"
import "./site.scss"

const WideTabs = () => {
  return(
    <h3 className={"wideTabs"}>Wide Tabs</h3>
  )
}

let componentContainer = {
  horizontalTabs: WideTabs
}


const generateContent = (pageContent) => {
  const components = pageContent.map((content, index) => {
    const DesiredComponent = componentContainer[content.component];
    return(
      <DesiredComponent key={index} />
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
      {generateContent(pageContext.content)}
    </div>
  )
}

BasicTemplate.propTypes = {
  pageContext: PropTypes.object,
}

export default BasicTemplate
