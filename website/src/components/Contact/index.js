import React from "react"
import "./contact.scss"
import SubmitButton from "../../images/submit.svg"
import { useTranslation } from "react-i18next"
import { Field, Form, Formik } from "formik"

export const ContactUs = () => {
  const { t } = useTranslation()

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        phone: ""
      }}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values, null, 2))
        actions.setSubmitting(false)
      }}
    >
      {() => (
        <div className={"contactUsDiv"}>
          <div className={"question"}>
            <div>
              Want to start a <br/>
              <a className={"whiteProject"}>project</a> with us?
            </div>
          </div>
          <div className={"submitForm"}>
            <Form className={"emailForm"}>
              <Field className={"inputField"} placeholder={t("name")} name="name"/>
              <Field className={"inputField"} placeholder={t("e-mail")} name="email"/>
              <Field className={"inputField"} placeholder={t("phone number")} name="phone"/>
              <label className={"submitButton"}>
                <input type="submit" style={{display: "none"}}/>
                <SubmitButton/>
              </label>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  )
}
