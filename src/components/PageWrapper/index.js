import React from "react"
import { withTrans } from "../../i18n/withTrans"
import pageWrapper from "./page-wrapper.module.css"
import PropTypes from "prop-types"

const PageWrapper = ({ children }) => {
  return <div className={pageWrapper.main}>{children}</div>
}

PageWrapper.propTypes = {
  children: PropTypes.array,
}

export default withTrans(PageWrapper)
