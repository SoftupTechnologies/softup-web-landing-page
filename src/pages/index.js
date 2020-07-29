import React from "react"
import { Landing } from "../components/Landing"
import PageLayout from "../components/PageLayout"
import { DesktopAccordionMenu } from "../components/Accordion"
import { Footer } from "../components/Footer"
import { ContactUs } from "../components/Contact"
import { isMobile } from "../components/helpers"
import { MobileAccordionMenu } from "../components/Accordion/mobile"

const IndexPage = () => (
  <PageLayout>
    <Landing />
    {isMobile ? <MobileAccordionMenu /> : <DesktopAccordionMenu />}
    <ContactUs />
    <Footer />
  </PageLayout>
)

export default IndexPage
