/* eslint-disable */
import React from "react"
import "./contact.scss"
import SubmitButton from "../../images/submit.svg"
import { useTranslation } from "react-i18next"
import { ErrorMessage, Field, Form, Formik } from "formik"
import { timeout } from "../helpers"

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
          const resp = await fetch(
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
          if (resp.status !== 200) {
            actions.setStatus({ error: true, ended: true })
          } else {
            actions.setStatus({ success: true, started: true, ended: true })
          }
          await timeout(2000)
          actions.resetForm()
        } catch (e) {
          actions.setStatus({ error: true, message: e, ended: true })
          await timeout(3000)
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
      {props => (
        <div className={"contactUsDiv"}>
          <div className={"question"}>
            <div>
              Want to start a <br />
              <a className={"whiteProject"}>project</a> with us?
            </div>
          </div>
          <div
            className={"postingIndicator"}
            style={
              props.status?.started && !props.status?.ended
                ? { display: "block", color: "white" }
                : { display: "none" }
            }
          >
            <div>Message is being sent</div>
            <div className="loader">Loading...</div>
          </div>
          <div
            className={"postingIndicator"}
            style={
              !props.status?.error && props.status?.ended
                ? { display: "block", color: "white" }
                : { display: "none" }
            }
          >
            <span style={{ textAlign: "center" }}>
              <p>Thanks for your message.</p>
              <p>Well get back to you within 48 hours.</p>
            </span>
          </div>
          <div
            className={"postingIndicator"}
            style={
              props.status?.error && props.status?.ended
                ? { display: "block", color: "white" }
                : { display: "none" }
            }
          >
            <span style={{ textAlign: "center" }}>
              <p>Unfortunately your message could not be delivered.</p>
              <p>Please use our email: info@softup.co</p>
            </span>
          </div>
          <div className={"submitForm"}>
            <Form
              className={"emailForm"}
              style={
                props.status?.started && !props.status?.ended
                  ? { filter: "blur(5px)" }
                  : {}
              }
            >
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
              {/* eslint-disable-next-line react/prop-types */}
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
      )}
    </Formik>
  )
}
