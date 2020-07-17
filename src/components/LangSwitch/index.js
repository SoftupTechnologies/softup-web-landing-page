import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import langSwitchStyles from "./lang-switch.module.css"

export const LanguageMenu = ({ data }) => {
  const { t, i18n } = useTranslation()

  const [values, setValues] = useState({
    language: "en"
  })

  async function handleChange (lang) {
    await i18n.changeLanguage(lang)
    setValues({ language: lang })
  }

  return (
    <div className={langSwitchStyles.langMenu}>
      <div className={langSwitchStyles.langButton} onClick={() => handleChange("en")}>
        EN
      </div>
      <div className={langSwitchStyles.langButton} onClick={() => handleChange("de")}>
        DE
      </div>
    </div>
  )
}
