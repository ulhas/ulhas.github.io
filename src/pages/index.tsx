import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import Home from "../components/home/home"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
  </Layout>
)

export default IndexPage
