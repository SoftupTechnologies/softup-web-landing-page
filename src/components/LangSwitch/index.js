import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import langSwitchStyles from "./lang-switch.module.css"

export const LanguageMenu = () => {
  const { i18n } = useTranslation()

  const [values, setValues] = useState({
    language: "en",
  })

  async function handleChange(lang) {
    await i18n.changeLanguage(lang)
    setValues({ language: lang })
  }

  return (
    <div className={langSwitchStyles.langMenu}>
      <div
        className={langSwitchStyles.langButton}
        onClick={() => handleChange("en")}
        style={
          values.language === "en"
            ? { border: "1.1px solid #19a0ff" }
            : { border: "1px solid transparent" }
        }
      >
        EN
      </div>
      <div
        className={langSwitchStyles.langButton}
        onClick={() => handleChange("de")}
        style={
          values.language === "de"
            ? { border: "1.1px solid #19a0ff" }
            : { border: "1px solid transparent" }
        }
      >
        DE
      </div>
    </div>
  )
}
