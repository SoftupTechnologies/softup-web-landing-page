import React from "react"
import SEO from "../seo"
import landingStyles from "./landing.module.css"
import { BurgerAndLogo, Slogan } from "./components"

const desc = "You have the vision for a stunning digital experience. We’re the software design and engineering team that can bring it to life."
const sloganTitle = "EMPOWERING IDEAS"

export const Landing = () => {
  return (
    <div className={landingStyles.landing}>
      <SEO title="Home"/>
      <BurgerAndLogo/>
      <Slogan description={desc} slogan={sloganTitle}/>
      <div style={{height: "15vh"}}/>
    </div>
  )
}
