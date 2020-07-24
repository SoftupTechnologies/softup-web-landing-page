import React from "react"
import { Landing } from "../components/Landing"
import PageLayout from "../components/PageLayout"
import { AccordionMenu } from "../components/Accordion"
import { Footer } from "../components/Footer"
import { ContactUs } from "../components/Contact"

const IndexPage = () => (
  <PageLayout>
    <Landing />
    <AccordionMenu />
    <ContactUs />
    <Footer />
  </PageLayout>
)

export default IndexPage
