import React from "react"
import { Col, Container, Jumbotron, Row } from "react-bootstrap"

import styles from "./home.module.scss"

const Home = () => <HeroSection />

const HeroSection = () => (
  <div className={`${styles.hero} d-flex align-items-center`}>
    <Container>
      <Jumbotron className="bg-transparent">
        <Hero />
        <Work />
      </Jumbotron>
    </Container>
  </div>
)

const Hero = () => (
  <Row>
    <Col md={{ span: 6, order: 6 }}>
      <HeroImage />
    </Col>
    <Col md={{ span: 6, order: 1 }}>
      <Heading />
      <SubHeading />
    </Col>
  </Row>
)

const HeroImage = () => <p className="display-3 text-md-center">🧑🏻‍💻</p>

const Heading = () => <h1>ulhas</h1>

const SubHeading = () => <h4>code | tech | random</h4>

const Work = () => (
  <>
    <Current />
    <Previous />
  </>
)

const Current = () => (
  <p className="font-weight-bold text-secondary mb-0">
    Currently -{" "}
    <span>
      <a
        href="https://www.procedure.tech"
        target="_blank"
        className="text-info text-decoration-none"
      >
        Procedure
      </a>
    </span>
  </p>
)

const Previous = () => (
  <p className="font-weight-bold text-secondary">
    Previously -{" "}
    <span>
      <a
        href="https://www.hypertrack.com"
        target="_blank"
        className="text-info text-decoration-none"
      >
        HyperTrack
      </a>
    </span>
    {", "}
    <span>
      <a
        href="https://www.opentable.com"
        target="_blank"
        className="text-info text-decoration-none"
      >
        OpenTable
      </a>
    </span>
  </p>
)

export default Home
