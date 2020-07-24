import React from "react"
import { Landing } from "../components/Landing"
import PageLayout from "../components/PageLayout"
import { AccordionMenu } from "../components/Accordion"
import { Footer } from "../components/Footer"

const IndexPage = () => (
  <PageLayout>
    <Landing />
    <AccordionMenu />
    <Footer />
  </PageLayout>
)

export default IndexPage
