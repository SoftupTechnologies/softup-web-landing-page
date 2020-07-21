import React from "react"
import { LanguageMenu } from "../LangSwitch"
import SoftupLogoSvg from "../../images/softup-logo.svg"
import "./manu-navigation.scss"
import { Link } from "../../../.cache/gatsby-browser-entry"
import { accSlides } from "../../data"

const SoftupLogo = () => {
  return (
    <Link to={"/"} className={"logo"}>
      <SoftupLogoSvg />
    </Link>
  )
}

const MenuLinks = () => {
  return <div className={"menuLinkDiv"}>
    {
      accSlides.map((slide, index) => (
        <Link className={"link"} key={index} to={slide.link}>{slide.title}</Link>
      ))
    }
  </div>
}

const MenuNavigation = () => {
  return (
    <div className={"menuNavigationDiv"}>
      <SoftupLogo />
      <MenuLinks />
      <LanguageMenu />
    </div>
  )
}

export default MenuNavigation
