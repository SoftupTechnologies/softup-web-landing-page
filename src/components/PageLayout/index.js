import React from "react"
import { withTrans } from "../../i18n/withTrans"
import "./page-layout.scss"
import PropTypes from "prop-types"
import classNames from "classnames"

const PageLayout = ({ children, enableMargins }) => {
  let classes = classNames({
    addFlex: true,
    addMargins: enableMargins,
  })
  return <div className={classes}>{children}</div>
}

PageLayout.propTypes = {
  children: PropTypes.array,
  enableMargins: PropTypes.bool,
}

export default withTrans(PageLayout)
