import React from "react"
import "./contact.scss"
import SubmitButton from "../../images/submit.svg"
import { useTranslation } from "react-i18next"
import { ErrorMessage, Field, Form, Formik } from "formik"

export const ContactUs = () => {
  const { t } = useTranslation()

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        phone: "",
      }}
      onSubmit={async (values, actions) => {
        try {
          actions.setStatus({ success: false, started: true, ended: false })
          await fetch(
            "https://s67z3we37e.execute-api.eu-central-1.amazonaws.com/prod/",
            {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify(values),
            }
          )
          alert("Information has been sent, thank you!")
          actions.resetForm()
        } catch (e) {
          alert("Form submission failed!")
        }
        actions.setSubmitting(false)
      }}
      validate={values => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
        const errors = {}
        if (!values.name.length) {
          errors.name = "Name Required"
        }
        if (!values.email || !emailRegex.test(values.email)) {
          errors.email = "Valid Email Required"
        }
        return errors
      }}
    >
      {() => (
        (
          <div className={"contactUsDiv"}>
            <div className={"question"}>
              <div>
                Want to start a <br />
                <a className={"whiteProject"}>project</a> with us?
              </div>
            </div>
            <div className={"submitForm"}>
              <Form className={"emailForm"}>
                <Field
                  className={"inputField"}
                  placeholder={t("name")}
                  name="name"
                />
                <ErrorMessage className={"validationError"} name="name" />
                <Field
                  className={"inputField"}
                  placeholder={t("e-mail")}
                  name="email"
                />
                <ErrorMessage className={"validationError"} name="email" />
                <ErrorMessage className={"validationError"} name="phone" />
                <Field
                  className={"inputField"}
                  placeholder={t("phone number")}
                  name="phone"
                />
                <label className={"submitButton"}>
                  <input type="submit" style={{ display: "none" }} />
                  <SubmitButton />
                </label>
              </Form>
            </div>
          </div>
        )
      )}
    </Formik>
  )
}
