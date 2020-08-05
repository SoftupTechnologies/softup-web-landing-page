import React from "react"
import PageLayout from "../components/PageLayout"
import { MobileAccordionMenu } from "../components/Accordion/mobile"
import { Landing } from "../components/Landing"
import { DesktopAccordionMenu } from "../components/Accordion"
import { Footer } from "../components/Footer"
import { ContactUs } from "../components/Contact"

const IndexPage = () => (
  <PageLayout>
    <Landing />
    <div id={"accordion-menu"}>
      {/*
      Unfortunately because of SSR and React Hydration,
      conditional rendering doesn't work in this case,
      so we have to use media queries.
      */}
      <MobileAccordionMenu />
      <DesktopAccordionMenu />
    </div>
    <ContactUs />
    <Footer />
  </PageLayout>
)

export default IndexPage
