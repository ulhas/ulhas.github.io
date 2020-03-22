import React from "react"
import { Container } from "react-bootstrap"

import { IntrinsicProps } from "../shared/shared"

const Blog = () => (
  <Container className="mb-5">
    <Heading className="my-5" />
  </Container>
)

const Heading = ({ className }: IntrinsicProps) => (
  <h1 className={className}>what i've to say</h1>
)

export default Blog
