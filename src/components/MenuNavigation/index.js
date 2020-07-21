import React from "react"
import { LanguageMenu } from "../LangSwitch"
import SoftupLogo from "../../images/softup-logo.svg"
import "./manu-navigation.scss"

const MenuNavigation = () => {
  return (
    <div className={"menuNavigationDiv"}>
      <SoftupLogo />
      <LanguageMenu />
    </div>
  )
}

export default MenuNavigation
