import "./landing.scss"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import BurgerMenuIcon from "../../images/burger.svg"
import React from "react"
import PropTypes from "prop-types"
import { LanguageMenu } from "../LangSwitch"
import { Link } from "../../../.cache/gatsby-browser-entry"
import SoftupLogoSvg from "../../images/softup-logo.svg"

export const Slogan = ({ slogan, description }) => {
  return (
    <div className="slogan">
      <h1 className="sloganTitle">
        {slogan}
        <div className="diamond-punctuation"></div>
      </h1>
      <div className="sloganDesc">{description}</div>
    </div>
  )
}

const SoftupLogo = () => {
  return (
    <Link to={"/"} className="logo">
      <SoftupLogoSvg />
    </Link>
  )
}

export const MenuHeader = () => {
  return (
    <div className="menuHeader">
      <SoftupLogo />
      <LanguageMenu gridColumnStart={"3"} />
      <AnchorLink offset="100" to="/#accordion-menu" className="burgerIcon">
        {/* TODO: Replace icon */}
        <BurgerMenuIcon />
      </AnchorLink>
    </div>
  )
}

Slogan.propTypes = {
  slogan: PropTypes.string,
  description: PropTypes.string,
}
