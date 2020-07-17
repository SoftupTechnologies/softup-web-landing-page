import React from "react"
import SEO from "../seo"
import landingStyles from "./landing.module.css"
import { MenuHeader, Slogan } from "./components"
import { useTranslation } from "react-i18next"

export const Landing = ({ data }) => {
  const { t } = useTranslation()
  return (
    <div className={landingStyles.landing}>
      <SEO title="Home"/>
      <MenuHeader data={data}/>
      <Slogan description={t("sloganDescription")} slogan={t("sloganTitle")}/>
      <div style={{ height: "15vh" }}/>
    </div>
  )
}
