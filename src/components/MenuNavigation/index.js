import React from "react"
import { LanguageMenu } from "../LangSwitch"
import SoftupLogoSvg from "../../images/softup-logo.svg"
import "./manu-navigation.scss"
import { Link } from "gatsby"
import { useTranslation } from "react-i18next"
import PropTypes from "prop-types"
import classNames from "classnames"

const SoftupLogo = () => {
  return (
    <Link to={"/"} className={"logo"}>
      <SoftupLogoSvg />
    </Link>
  )
}

const MenuLinks = ({ menuItems, activeMenuItem }) => {
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

const MenuNavigation = ({ menuItems, activeMenuItem }) => {
  return (
    <div className={"menuNavigationDiv"}>
      <SoftupLogo />
      <MenuLinks menuItems={menuItems} activeMenuItem={activeMenuItem} />
      <LanguageMenu gridColumnStart={"4"} />
    </div>
  )
}

MenuLinks.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      link: PropTypes.string,
    })
  ),
  activeMenuItem: PropTypes.string,
}

MenuNavigation.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      link: PropTypes.string,
    })
  ),
  activeMenuItem: PropTypes.string,
}

export default MenuNavigation
