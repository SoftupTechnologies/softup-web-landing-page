import landingStyles from "./landing.module.css"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import BurgerMenuIcon from "../../images/burger.svg"
import React from "react"
import PropTypes from "prop-types"
import { LanguageMenu } from "../LangSwitch"
import { Link } from "../../../.cache/gatsby-browser-entry"
import SoftupLogoSvg from "../../images/softup-logo-crop.svg"

export const Slogan = ({ slogan, description }) => {
  return (
    <div className={landingStyles.slogan}>
      <div className={landingStyles.sloganTitle}>{slogan}</div>
      <div className={landingStyles.sloganDesc}>{description}</div>
    </div>
  )
}

const SoftupLogo = () => {
  return (
    <Link to={"/"} className={landingStyles.logo}>
      <SoftupLogoSvg/>
    </Link>
  )
}

export const MenuHeader = () => {
  return (
    <div className={landingStyles.menuHeader}>
        <SoftupLogo/>
        <LanguageMenu/>
      <AnchorLink
        offset="100"
        to="/#accordion-menu"
        className={landingStyles.burgerIcon}
      >
        <BurgerMenuIcon />
      </AnchorLink>
    </div>
  )
}

Slogan.propTypes = {
  slogan: PropTypes.string,
  description: PropTypes.string
}
