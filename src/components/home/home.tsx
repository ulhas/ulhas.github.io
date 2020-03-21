import React from "react"
import { Container, Jumbotron } from "react-bootstrap"

import styles from "./home.module.scss"

const Heading = () => <h1>ulhas</h1>

const SubHeading = () => (
  <>
    <h4>code | tech | startups</h4>
  </>
)

const HeroSection = () => {
  return (
    <div className={`${styles.hero} d-flex align-items-center`}>
      <Container>
        <Jumbotron className="bg-transparent">
          <Heading />
          <SubHeading />
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
