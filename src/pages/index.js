import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import { Background } from "../components/background"
import { Landing } from "../components/Landing"
import { Services } from "../components/Services"

const IndexPage = () => (
  <Layout>
    <Background>
      <Router>
        <Services path="/services"/>
        <Landing path="/"/>
      </Router>
    </Background>
  </Layout>
)

export default IndexPage
