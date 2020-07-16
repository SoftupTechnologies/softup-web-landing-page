import React from "react"
import { Landing } from "../components/Landing"
import { Expertise } from "../components/Expertise"
import { PageWrapper } from "../components/PageWrapper"
import { Accordion } from "../components/Accordion"

const IndexPage = () => (
  <PageWrapper>
    <Landing/>
    <Accordion />
    <Expertise />
  </PageWrapper>
)

export default IndexPage
