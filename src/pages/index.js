import React from "react"
import { Landing } from "../components/Landing"
import { Services } from "../components/Services"
import { PageWrapper } from "../components/PageWrapper"

const IndexPage = () => (
  <PageWrapper>
    <Landing/>
    <Services/>
  </PageWrapper>
)

export default IndexPage
