import React from "react"
import PropTypes from "prop-types"
import MenuNavigation from "../components/MenuNavigation"

const BasicTemplate = ({ pageContext }) => {
  return (
    <div>
      <MenuNavigation menuItems={pageContext.menuItems} />
      <div style={{ color: "white" }}>{pageContext.title}</div>
    </div>
  )
}

BasicTemplate.propTypes = {
  pageContext: PropTypes.object,
}

export default BasicTemplate
