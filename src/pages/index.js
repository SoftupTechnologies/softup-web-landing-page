import React from "react"
import { Landing } from "../components/Landing"
import PageWrapper from "../components/PageWrapper"
import { AccordionMenu } from "../components/Accordion"

const IndexPage = () => (
  <PageWrapper>
    <Landing />
    <AccordionMenu />
  </PageWrapper>
)

export default IndexPage
