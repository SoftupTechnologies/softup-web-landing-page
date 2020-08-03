import React from "react"
import { Link } from "gatsby"
import SoftupLogoSvg from "../../images/softup-logo.svg"
import "./footer.scss"

const SoftupLogo = () => {
  return (
    <Link to={"/"} className={"footerLogo"}>
      <SoftupLogoSvg />
    </Link>
  )
}

export const Footer = () => {
  return (
    <div className={"footerGrid"}>
      <div className={"footerDiv"}>
        <SoftupLogo />
        <div className={"footerSection"}>
          <div className={"sectionTitle"}>CONTACT</div>
          <div className={"sectionRow"}>Phone: +49 172 7166148</div>
          <div className={"sectionRow"}>
            E-mail:{" "}
            <a className={"email"} href="mailto:info@softup.co">
              info@softup.co
            </a>
          </div>
          <div className={"sectionRow"}>
            Buschingstraße 22, 81677
            <br />
            München
          </div>
        </div>
        <div className={"footerSection"}>
          <div className={"sectionTitle"}>ABOUT</div>
          <div className={"sectionRow"}>
            <Link to={"/portfolio"}>Portfolio</Link>
          </div>
          <div className={"sectionRow"}>
            <Link to={"/blog"}>Blog</Link>
          </div>
          <div className={"sectionRow"}>
            <Link to={"/career"}>We are hiring!</Link>
          </div>
        </div>
        <div className={"footerSection"}>
          <div className={"sectionTitle"}>LEGAL</div>
          <div className={"sectionRow"}>Privacy Policy</div>
          <div className={"sectionRow"}>Imprint</div>
          <div className={"sectionRow"}>FB LI GH</div>
        </div>
      </div>
    </div>
  )
}
