import React from "react"
import "./contact.scss"
import SubmitButton from "../../images/submit.svg"
import { useTranslation } from "react-i18next"

export const ContactUs = () => {
  const { t } = useTranslation()
  return (
    <div className={"contactUsDiv"}>
      <div className={"question"}>
        <div>
          Want to start a <br />
          <a className={"whiteProject"}>project</a> with us?
        </div>
      </div>
      <div className={"submitForm"}>
        <form action="" method="post" className={"emailForm"}>
          <input
            type={"text"}
            placeholder={t("name")}
            className={"inputField"}
          />
          {/* eslint-disable-next-line no-undef */}
          <div className={"submitButton"} onClick={() => console.log("submit")}>
            <SubmitButton />
          </div>
          <input
            type={"email"}
            placeholder={t("e-mail")}
            className={"inputField"}
          />
          <input
            type={"text"}
            placeholder={t("phone number")}
            className={"inputField"}
          />
        </form>
      </div>
    </div>
  )
}
