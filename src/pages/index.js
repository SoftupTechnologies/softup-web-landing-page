import React from "react"
import { Landing } from "../components/Landing"
import PageLayout from "../components/PageLayout"
import { AccordionMenu } from "../components/Accordion"

const IndexPage = () => (
  <PageLayout>
    <Landing />
    <AccordionMenu />
  </PageLayout>
)

export default IndexPage
