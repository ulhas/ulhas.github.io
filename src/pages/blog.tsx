import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import Theme from "../components/theme/theme"

import Blog from "../components/blog/blog"

const BlogPage = () => (
  <Theme>
    <Layout>
      <SEO title="Blog" />
      <Blog />
    </Layout>
  </Theme>
)

export default BlogPage
