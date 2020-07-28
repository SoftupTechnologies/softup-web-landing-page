/* eslint-disable */
import React, { useState } from "react"
import PropTypes from "prop-types"
import MenuNavigation from "../components/MenuNavigation"
import { useTranslation } from "react-i18next"
import "./site.scss"
import { Footer } from "../components/Footer"
import { ContactUs } from "../components/Contact"
import { generateContent } from "../components/helpers"

const BasicTemplate = ({ pageContext }) => {
  const { t } = useTranslation()
  return (
    <div>
      <MenuNavigation
        menuItems={pageContext.menuItems}
        activeMenuItem={pageContext.title}
      />
      <div className={"pageTemplate"}>
        <div className={"bodyTitleDiv"}>
          <div className={"title"}>{t(pageContext.title)}</div>
        </div>
        {generateContent(pageContext?.content)}
      </div>
      <ContactUs />
      <Footer />
    </div>
  )
}

BasicTemplate.propTypes = {
  pageContext: PropTypes.object,
}

export default BasicTemplate
