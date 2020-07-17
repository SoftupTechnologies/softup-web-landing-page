import React from "react"
import { withTrans } from "../../i18n/withTrans"
import pageWrapper from "./page-wrapper.module.css"

const PageWrapper = ({ children }) => {
  return <div className={pageWrapper.main}>{children}</div>
}

export default withTrans(PageWrapper)
