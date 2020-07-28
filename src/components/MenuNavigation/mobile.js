import React from "react"
import { LanguageMenu } from "../LangSwitch"
import SoftupLogoSvg from "../../images/softup-logo.svg"
import "./mobile.scss"
import { Link } from "gatsby"
import { useTranslation } from "react-i18next"
import PropTypes from "prop-types"
import classNames from "classnames"
import Burger from "../../images/burger.svg"

const SoftupLogo = () => {
  return (
    <Link to={"/"} className={"mobileSoftupLogo"}>
      <SoftupLogoSvg />
    </Link>
  )
}

const MobileMenuLinks = ({ menuItems, activeMenuItem }) => {
  const { t } = useTranslation()
  return (
    <div className={"menuLinkDiv"}>
      {menuItems?.map((item, index) => {
        let classes = classNames({
          link: true,
          enabledMenuItem: item.title === activeMenuItem,
        })
        return (
          <Link className={classes} key={index} to={item.link}>
            {t(item.title)}
          </Link>
        )
      })}
    </div>
  )
}

const MobileNavigation = ({ menuItems, activeMenuItem }) => {
  return (
    <div className={"mobileMenuDiv"}>
      <SoftupLogo className={"mobileSoftupLogo"} />
      <Burger />
      {/*<MobileMenuLinks menuItems={menuItems} activeMenuItem={activeMenuItem} />*/}
    </div>
  )
}

MobileMenuLinks.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      link: PropTypes.string,
    })
  ),
  activeMenuItem: PropTypes.string,
}

MobileNavigation.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      link: PropTypes.string,
    })
  ),
  activeMenuItem: PropTypes.string,
}

export default MobileNavigation
