import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import Theme from "../components/theme/theme"

import About from "../components/about/about"

const AboutPage = () => (
  <Theme>
    <Layout>
      <SEO title="About" />
      <About />
    </Layout>
  </Theme>
)

export default AboutPage
