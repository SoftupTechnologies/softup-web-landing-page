import landingStyles from "./landing.module.css"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import SoftupLogo from "../../images/softup-logo.svg"
import BurgerMenuIcon from "../../images/burger.svg"
import React from "react"

export const Slogan = ({ slogan, description }) => {
  return (
    <div className={landingStyles.slogan}>
      <div className={landingStyles.sloganTitle}>
        {slogan}
      </div>
      <div className={landingStyles.sloganDesc}>
        {description}
      </div>
    </div>
  )
}

export const BurgerAndLogo = () => {
  return (
    <div className={landingStyles.logoBurger}>
      <SoftupLogo className={landingStyles.softupLogo}/>
      <AnchorLink offset='100' to="/#expertise">
        <BurgerMenuIcon className={landingStyles.burgerLogo}/>
      </AnchorLink>
    </div>
  )
}
