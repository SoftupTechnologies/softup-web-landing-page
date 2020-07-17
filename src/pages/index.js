import React from "react"
import { Landing } from "../components/Landing"
import { Expertise } from "../components/Expertise"
import PageWrapper from "../components/PageWrapper"
import { Accordion } from "../components/Accordion"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => (
  <PageWrapper>
    <Landing data={data} />
    <Accordion />
    <Expertise />
  </PageWrapper>
)

export default IndexPage

export const query = graphql`
  query {
    file(relativePath: { eq: "gatsby-icon.png" }) {
      childImageSharp {
        fixed(width: 30) {
          base64
          width
          height
          src
          srcSet
        }
      }
    }
  }
`
