import React from "react"
import { Col, Container, Jumbotron, Row } from "react-bootstrap"

import styles from "./home.module.scss"

const Heading = () => <h1>ulhas</h1>

const SubHeading = () => (
  <>
    <h4>code | tech | startups</h4>
  </>
)

const HeroImage = () => <p className="display-3 text-md-center">🧑🏻‍💻</p>

const HeroSection = () => {
  return (
    <div className={`${styles.hero} d-flex align-items-center`}>
      <Container>
        <Jumbotron className="bg-transparent">
          <Row>
            <Col md={{ span: 6, order: 6 }}>
              <HeroImage />
            </Col>
            <Col md={{ span: 6, order: 1 }}>
              <Heading />
              <SubHeading />
            </Col>
          </Row>
        </Jumbotron>
      </Container>
    </div>
  )
}

const Home = () => {
  return (
    <>
      <HeroSection />
    </>
  )
}

export default Home
