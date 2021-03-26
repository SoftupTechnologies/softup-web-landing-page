import "./landing.scss";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import BurgerDesktop from "../../images/burger-desktop.svg";
import BurgerMobile from "../../images/burger.svg";
import React from "react";
import PropTypes from "prop-types";
// import { LanguageMenu } from "../LangSwitch"
import { Link } from "../../../.cache/gatsby-browser-entry";
import SoftupLogoSvg from "../../images/softup-logo.svg";
import {Image} from "../image";
import { Button } from "../Button";

export const Slogan = ({ slogan, description }) => {
  return (
    <div>
        <div className="slogan">
            <h1 className="sloganTitle">
                {slogan}
                <div className="diamond-punctuation"></div>
            </h1>
            <div className="sloganDesc">{description}</div>
        </div>
        <div id="company-numbers" className="companyNumContainer">
            <div className="companyNumbers">
                <div className="benchmarkGroup">
                    <Button data={{openInNewPage:false, link:"mailto:info@softup.co", value:"Reach out to us"}}/>
                </div>
                <div className="benchmarkGroup">
                    <Button data={{openInNewPage:false, link:"/estimator", value:"Estimate your project"}}/>
                </div>
            </div>
        </div>
    </div>
  );
};

const SoftupLogo = () => {
  return (
    <Link to={"/"} className="logoIcon">
      <SoftupLogoSvg />
    </Link>
  );
};

export const MenuHeader = () => {
  return (
    <div className="menuHeader">
      <SoftupLogo />
      {/* <LanguageMenu gridColumnStart={"3"} /> */}
      <AnchorLink offset="100" to="/#accordion-menu" className="burgerIcon">
        <div className="desktop">
          <BurgerDesktop />
        </div>
        <div className="mobile">
          <BurgerMobile />
        </div>
      </AnchorLink>
    </div>
  );
};

Slogan.propTypes = {
  slogan: PropTypes.string,
  description: PropTypes.string,
};
