import React, { useState } from "react"
import { useTranslation } from "react-i18next"

import deLogo from "images/de.png"
import enLogo from "images/en.png"

export const LanguageMenu = (props) => {
  const { t, i18n } = useTranslation()

  const [values, setValues] = useState({
    language: 'en'
  });

  function handleChange(event) {
    i18n.changeLanguage(event.target.value)

    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }

  return(
    <Select
      value={values.language}
      onChange={(e) => handleChange(e)}
      disableUnderline
      inputProps={{
        name: 'language'
      }}
    >
      <MenuItem value={'en'}><img src={enLogo} alt="EN" /></MenuItem>
      <MenuItem value={'de'}><img src={deLogo} alt="DE" /></MenuItem>
    </Select>
  )
}
