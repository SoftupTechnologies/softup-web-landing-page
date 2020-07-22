import React from "react"
import SEO from "../seo"
import landingStyles from "./landing.module.css"
import { MenuHeader, Slogan } from "./components"
import { useTranslation } from "react-i18next"
import StyledBackgroundSection from "../background"
import PageLayout from "../PageLayout"

export const Landing = () => {
  const { t } = useTranslation()
  return (
    <StyledBackgroundSection>
      <PageLayout>
        <div className={landingStyles.landing}>
          <SEO title="Home" />
          <MenuHeader />
          <Slogan
            description={t("sloganDescription")}
            slogan={t("sloganTitle")}
          />
        </div>
      </PageLayout>
    </StyledBackgroundSection>
  )
}
