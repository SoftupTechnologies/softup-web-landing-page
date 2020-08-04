import React, { useState } from "react"
import PropTypes from "prop-types"
import MenuNavigation from "../components/MenuNavigation"
import { useTranslation } from "react-i18next"
import "./site.scss"
import { Footer } from "../components/Footer"
import { ContactUs } from "../components/Contact"
import { generateContent } from "../components/helpers"
import SEO from "../components/seo"

const BasicTemplate = ({ pageContext }) => {
  const { t } = useTranslation()
  const [menuType, setMenuType] = useState({ showMobileMenu: false })
  return (
    <div id="top">
      {pageContext?.accordionSlugs?.map((slug, index) => {
        // This exists because otherwise the browser will scroll to the anchor
        // meaning, after every click or redirection it will scroll you down
        // to the tab name. This is a workaround
        return <div key={index} id={slug} />
      })}
      <MenuNavigation
        menuItems={pageContext.menuItems}
        activeMenuItem={pageContext.title}
        menuType={menuType}
        setMenuType={setMenuType}
      />
      {!menuType.showMobileMenu ? (
        <React.Fragment>
          <SEO title={t(pageContext.title)} />
          <div className={"pageTemplate"}>
            {pageContext?.showTitleInBody ? (
              <div className={"bodyTitleDiv"}>
                <div className={"title"}>{t(pageContext.title)}</div>
              </div>
            ) : null}
            {generateContent(pageContext?.content)}
          </div>
          <ContactUs />
          <Footer />
        </React.Fragment>
      ) : null}
    </div>
  )
}

BasicTemplate.propTypes = {
  pageContext: PropTypes.object,
}

export default BasicTemplate
