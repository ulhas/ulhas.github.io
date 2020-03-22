import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import Theme from "../components/theme/theme"

import Home from "../components/home/home"

const IndexPage = () => (
  <Theme>
    <Layout>
      <SEO title="Home" />
      <Home />
    </Layout>
  </Theme>
)

export default IndexPage
