import React from "react";
import { Link } from "gatsby";
import SoftupLogoSvg from "../../images/softup-logo.svg";
import "./footer.scss";
import Facebook from "../../images/facebook.svg";
import Linkedin from "../../images/linkedin.svg";
import Github from "../../images/github.svg";

const SoftupLogo = () => {
  return (
    <Link to={"/"} className="footerLogo">
      <SoftupLogoSvg />
    </Link>
  );
};

export const Footer = () => {
  return (
    <div className="footerGrid">
      <div className="footerDiv">
        <div className="logo">
          <SoftupLogo />
        </div>

        <div className="contact">
          <div className="header">Contact</div>
          <div className="item">Phone: +49 172 7166148</div>
          <div className="item">
            E-mail:&nbsp;
            <a href="mailto:info@softup.co">info@softup.co</a>
          </div>
          <div className="item">
            Buschingstraße 22,
            <br /> 81677 München
          </div>
        </div>

        <div className="about">
          <div className="header">About</div>
          <div className="item">
            <Link to={"/portfolio"}>Portfolio</Link>
          </div>
          <div className="item">
            <Link to={"https://blog.softup.co"}>Blog</Link>
          </div>
          <div className="item">
            Join us&nbsp;&ndash;
            <Link
              to={
                "https://www.notion.so/Ready-for-a-Challenge-78fa9cdfe3774736bbd848a91419ac6e"
              }
            >
              &nbsp;We&#39;re hiring!
            </Link>
          </div>
        </div>

        <div className="social">
          <div className="icon">
            <Link to={"https://www.facebook.com/SoftupTechnologies/"}>
              <Facebook />
            </Link>
          </div>
          <div className="icon">
            <Link to={"https://www.linkedin.com/company/softuptechnologies/"}>
              <Linkedin />
            </Link>
          </div>
          <div className="icon">
            <Link to={"https://github.com/SoftupTechnologies"}>
              <Github />
            </Link>
          </div>
        </div>
        <div className="privacy-imprint">
          <Link to={"/privacy-policy"}>Privacy Policy</Link>&nbsp;&#124;&nbsp;
          <Link to={"/imprint"}>Imprint</Link>
        </div>
        <div className="general">
          &#169; {new Date().getFullYear()} Softup Technologies GmbH &ndash; All
          Rights reserved
        </div>
      </div>
    </div>
  );
};
