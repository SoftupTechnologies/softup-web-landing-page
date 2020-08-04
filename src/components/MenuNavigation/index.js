import React from "react"
import { LanguageMenu } from "../LangSwitch"
import SoftupLogoSvg from "../../images/softup-logo.svg"
import "./menu-navigation.scss"
import { Link } from "gatsby"
import { useTranslation } from "react-i18next"
import PropTypes from "prop-types"
import { isMobile } from "../helpers"
import MobileNavigation from "./mobile"

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
      {menuItems?.map((item, index) => {
        return (
          <Link
            className={"link"}
            key={index}
            to={item.link}
            getProps={({ isPartiallyCurrent }) =>
              isPartiallyCurrent
                ? { className: "link enabledMenuItem" }
                : { className: "link" }
            }
          >
            {t(item.title)}
          </Link>
        )
      })}
    </div>
  )
}

const MenuNavigation = ({
  menuItems,
  activeMenuItem,
  menuType,
  setMenuType,
}) => {
  if (isMobile) {
    return (
      <MobileNavigation
        menuItems={menuItems}
        activeMenuItem={activeMenuItem}
        menuType={menuType}
        setMenuType={setMenuType}
      />
    )
  }
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
      number: PropTypes.string,
    })
  ),
  menuType: PropTypes.object,
  setMenuType: PropTypes.func,
  activeMenuItem: PropTypes.string,
}

export default MenuNavigation
