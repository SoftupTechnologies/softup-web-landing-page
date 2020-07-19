import landingStyles from "./landing.module.css"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import SoftupLogo from "../../images/softup-logo.svg"
import BurgerMenuIcon from "../../images/burger.svg"
import React from "react"
import { LanguageMenu } from "../LangSwitch"

export const Slogan = ({ slogan, description }) => {
  return (
    <div className={landingStyles.slogan}>
      <div className={landingStyles.sloganTitle}>{slogan}</div>
      <div className={landingStyles.sloganDesc}>{description}</div>
    </div>
  )
}

export const MenuHeader = () => {
  return (
    <div className={landingStyles.menuHeader}>
      <div className={landingStyles.leftPlaceholder} />
      <div className={landingStyles.logoBurger}>
        <SoftupLogo className={landingStyles.softupLogo} />
        <AnchorLink offset="100" to="/#company-numbers">
          <BurgerMenuIcon className={landingStyles.burgerLogo} />
        </AnchorLink>
      </div>
      <LanguageMenu />
    </div>
  )
}
