import React from "react"
import { Landing } from "../components/Landing"
import { Expertise } from "../components/Expertise"
import { PageWrapper } from "../components/PageWrapper"

const IndexPage = () => (
  <PageWrapper>
    <Landing/>
    <Expertise/>
  </PageWrapper>
)

export default IndexPage
