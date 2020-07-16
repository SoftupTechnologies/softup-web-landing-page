import React, { useEffect } from "react"
import SEO from "../seo"
import landingStyles from "./landing.module.css"
import { BurgerAndIcon, Slogan } from "./components"

const desc = "You have the vision for a stunning digital experience. We’re the software design and engineering team that can bring it to life."
const sloganTitle = "EMPOWERING IDEAS"

export const Landing = () => {
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--vh", `
      ${window.innerHeight / 100}px`
    )
  })
  return (
    <div className={landingStyles.landing}>
      <SEO title="Home"/>
      <BurgerAndIcon/>
      <Slogan description={desc} slogan={sloganTitle}/>
      <div/>
    </div>
  )
}
