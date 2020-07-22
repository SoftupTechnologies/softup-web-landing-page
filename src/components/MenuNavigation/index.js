import React from "react"
import { LanguageMenu } from "../LangSwitch"
import SoftupLogoSvg from "../../images/softup-logo-crop.svg"
import "./manu-navigation.scss"
import { Link } from "../../../.cache/gatsby-browser-entry"
import { useTranslation } from "react-i18next"
import PropTypes from "prop-types"

const SoftupLogo = () => {
  return (
    <Link to={"/"} className={"logo"}>
      <SoftupLogoSvg />
    </Link>
  )
}

const MenuLinks = ({ menuItems }) => {
  const { t } = useTranslation()
  return (
    <div className={"menuLinkDiv"}>
      {menuItems.map((item, index) => (
        <Link className={"link"} key={index} to={item.link}>
          {t(item.title)}
        </Link>
      ))}
    </div>
  )
}

const MenuNavigation = ({ menuItems }) => {
  return (
    <div className={"menuNavigationDiv"}>
      <SoftupLogo />
      <MenuLinks menuItems={menuItems} />
      <LanguageMenu />
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
}

MenuNavigation.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      link: PropTypes.string,
    })
  ),
}

export default MenuNavigation
