// @format
import React from "react"
import { Container } from "react-bootstrap"

import { IntrinsicProps } from "../shared/shared"

const About = () => (
  <Container className="mb-5">
    <Heading className="my-5" />
    <Me />
  </Container>
)

const Heading = ({ className }: IntrinsicProps) => (
  <h1 className={className}>hi, nice to meet you</h1>
)

const Me = () => (
  <>
    <p>
    I'm have strong opinions about a lot of things, mostly in tech, and that's what I want to talk about here.
    </p>

    <p>
    Expect me to write about code, designs, system archictecture, rants about JS, startups, coffee and anything that interests me.
    </p>

    <p>
    This is written in <a href="https://www.gatsby.com/">Gatsby</a>, hosted on Github pages and deployed through Travis CI.
    You can find the codebase <a href="http://www.github.com/ulhas/ulhas.github.io/">here</a>.
    </p>
  </>
)

export default About
