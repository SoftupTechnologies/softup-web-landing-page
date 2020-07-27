import React from "react"
import "./contact.scss"
import SubmitButton from "../../images/submit.svg"

export const ContactUs = () => {
  return (
    <div className={"contactUsDiv"}>
      <div className={"question"}>
        <div>
          Want to start a <br/>
          <a className={"whiteProject"}>project</a> with us?
        </div>
      </div>
      <div className={"submitForm"} >
        <form action="" method="post" className={"emailForm"}>
            <input type={"text"} placeholder={"name"} className={"inputField"}/>
            <input type={"email"} placeholder={"e-mail"} className={"inputField"}/>
            <input type={"text"} placeholder={"phone number"} className={"inputField"}/>
        </form>
        <div className={"submitButton"}><SubmitButton/></div>
      </div>
    </div>
  )
}
