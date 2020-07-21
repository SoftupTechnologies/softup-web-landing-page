import landingStyles from "./landing.module.css"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import BurgerMenuIcon from "../../images/burger.svg"
import React from "react"
import PropTypes from "prop-types"
import { LanguageMenu } from "../LangSwitch"
import { Link } from "../../../.cache/gatsby-browser-entry"
import SoftupLogoSvg from "../../images/softup-logo.svg"

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
    <Link to={"/"} className={landingStyles.softupLogo}>
      <SoftupLogoSvg />
    </Link>
  )
}

export const MenuHeader = () => {
  return (
    <div className={landingStyles.menuHeader}>
      <div className={landingStyles.logoBurger}>
        <div className={landingStyles.leftPlaceholder} />
        <SoftupLogo />
        <LanguageMenu />
      </div>
      <AnchorLink
        className={landingStyles.burgerLogo}
        offset="100"
        to="/#accordion-menu"
      >
        <BurgerMenuIcon />
      </AnchorLink>
    </div>
  )
}

Slogan.propTypes = {
  slogan: PropTypes.string,
  description: PropTypes.string,
}
