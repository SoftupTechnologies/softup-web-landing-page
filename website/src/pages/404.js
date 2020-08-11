import React from "react"
import SEO from "../components/seo"
import PageLayout from "../components/PageLayout"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <PageLayout>
    <div className={"notFoundDiv"}>
      <SEO title="404: Not found"/>
      <div style={{fontSize: "calc(2.5vw + 2.5rem)", lineHeight: "calc(2.5vw + 2.5rem)"}}>404</div>
      <div style={{fontSize: "1.5rem"}}>PAGE NOT FOUND</div>
      <p>This page does not exist.</p>
      <Link to={"/"}>Back to Homepage</Link>
    </div>
  </PageLayout>
)

export default NotFoundPage
