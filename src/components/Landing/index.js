import React, { useEffect } from "react"
import SoftupLogo from "../../images/softup-logo.svg"
import ArrowDown from "../../images/arrow-down.svg"
import BurgerMenuIcon from "../../images/burger.svg"
import SEO from "../seo"
import landingStyles from "./landing.module.css"
import { AnchorLink } from "gatsby-plugin-anchor-links"

export const Landing = () => {
  useEffect(() => {
    document.documentElement.style.setProperty("--vh", `${window.innerHeight / 100}px`)
  })
  return (
    <div className={landingStyles.landing}>
      <SEO title="Home"/>
      <div className={landingStyles.logoBurger}>
        <SoftupLogo className={landingStyles.softupLogo}/>
        <BurgerMenuIcon className={landingStyles.burgerLogo}/>
      </div>
      <div className={landingStyles.slogan}>
        <div className={landingStyles.sloganTitle}>
          EMPOWERING IDEAS
        </div>
        <div className={landingStyles.sloganDesc}>
          You have the vision for a stunning digital experience. We’re the software design and engineering team that
          can
          bring it to life.
        </div>
      </div>
      <div className={landingStyles.arrow}>
        <AnchorLink offset='100' to="/#services" stripHash={true}>
          <ArrowDown/>
        </AnchorLink>
      </div>
    </div>
  )
}
