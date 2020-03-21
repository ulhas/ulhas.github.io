import React from "react"
import { Container } from "react-bootstrap"

import { IntrinsicProps } from "../shared/shared"

const Heading = ({ className }: IntrinsicProps) => (
  <h2 className={className}>what i've to say</h2>
)

const Blog = () => (
  <Container>
    <Heading className="my-5" />
  </Container>
)

export default Blog
