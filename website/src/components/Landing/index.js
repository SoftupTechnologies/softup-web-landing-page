import React from "react";
import SEO from "../seo";
import "./landing.scss";
import { MenuHeader, Slogan } from "./components";
import { useTranslation } from "react-i18next";
// import StyledBackgroundSection from "../background";
import PageLayout from "../PageLayout";

export const Landing = () => {
  const { t } = useTranslation();

  return (
    // <StyledBackgroundSection>
    <PageLayout>
      <div className="landing">
        <SEO title="Home" />
        <MenuHeader />
        <div className="displayWithGrid">
          <div className="slogan-wrapper">
            <Slogan
              description={t("sloganDescription")}
              slogan={t("sloganTitle")}
            />
          </div>
        </div>
      </div>
    </PageLayout>
    // </StyledBackgroundSection>
  );
};
