import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import langSwitchStyles from "./lang-switch.module.css"
import PropTypes from "prop-types"

export const LanguageMenu = ({ gridColumnStart }) => {
  const { i18n } = useTranslation()
  const lang = i18n.language

  const [values, setValues] = useState({
    language: lang,
  })

  async function handleChange(lang) {
    await i18n.changeLanguage(lang)
    setValues({ language: lang })
  }

  return (
    <div
      className={langSwitchStyles.langMenu}
      style={{ gridColumnStart: gridColumnStart }}
    >
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

LanguageMenu.propTypes = {
  gridColumnStart: PropTypes.string,
}
