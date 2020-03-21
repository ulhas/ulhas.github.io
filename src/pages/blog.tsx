import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"

import Blog from "../components/blog/blog"

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />
    <Blog />
  </Layout>
)

export default BlogPage
