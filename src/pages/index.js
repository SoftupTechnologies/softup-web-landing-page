import React from "react"
import { Landing } from "../components/Landing"
import { CompanyNumbers } from "../components/CompanyNumbers"
import PageWrapper from "../components/PageWrapper"
import { Accordion } from "../components/Accordion"

const IndexPage = () => (
  <PageWrapper>
    <Landing />
    <CompanyNumbers />
  </PageWrapper>
)

export default IndexPage
