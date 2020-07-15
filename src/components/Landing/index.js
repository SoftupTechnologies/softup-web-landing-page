import React from "react"
import SoftupLogo from "../../images/softup-logo.svg"
import ArrowDown from "../../images/arrow-down.svg"
import SEO from "../seo"
import landingStyles from "./landing.module.css"

export const Landing = () => {
  return (
    <div className={landingStyles.landing}>
      <SEO title="Home"/>
      <div className={landingStyles.iconDiv}>
        <SoftupLogo className={landingStyles.iconStyle}/>
      </div>
      <div className={landingStyles.slogan}>
        <div className={landingStyles.sloganTitle}>
          EMPOWERING IDEAS
        </div>
        <div className={landingStyles.sloganDesc}>
          You have the vision for a stunning digital experience. We’re the software design and engineering team that can
          bring it to life.
        </div>
      </div>
      <div className={landingStyles.arrow}>
        <ArrowDown/>
      </div>
    </div>
  )
}
