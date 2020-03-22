import React from "react"
import { Container, Col, Row } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"
import { IconProp } from "@fortawesome/fontawesome-svg-core"

import { IntrinsicProps } from "../shared/shared"

interface SocialMediaProps {
  icon: IconProp
  href: string
  ariaLabel: string
}

const SocialMediaButton = ({
  className,
  icon,
  href,
  ariaLabel,
}: SocialMediaProps & IntrinsicProps) => (
  <a
    href={href}
    target="_blank"
    className={`text-dark ${className ? className : ""}`}
    aria-label={ariaLabel}
  >
    <FontAwesomeIcon icon={icon} size={"2x"} />
  </a>
)

const Twitter = (props: IntrinsicProps) => (
  <SocialMediaButton
    icon={faTwitter}
    href="https://www.twitter.com/ulhas_sm"
    ariaLabel="Ulhas's Twitter"
    {...props}
  />
)

const LinkedIn = (props: IntrinsicProps) => (
  <SocialMediaButton
    icon={faLinkedin}
    href="https://www.linkedin.com/in/ulhasm"
    ariaLabel="Ulhas's LinkedIn"
    {...props}
  />
)

const GitHub = (props: IntrinsicProps) => (
  <SocialMediaButton
    icon={faGithub}
    href="https://www.github.com/ulhas"
    ariaLabel="Ulhas's Github"
    {...props}
  />
)

const FooterNote = () => (
  <h6 className="pt-2 text-secondary">
    {`{ `}
    built with
    {` `}
    <a
      href="https://www.gatsbyjs.org"
      target="_blank"
      className="text-info"
      aria-label="Built with Gatsby"
    >
      gatsby
    </a>
    {` }`}
  </h6>
)

const Footer = () => (
  <footer>
    <Container>
      <Row>
        <Col xs={6}>
          <FooterNote />
        </Col>
        <Col xs={6}>
          <div className="float-right">
            <Twitter className="mr-2" />
            <LinkedIn className="mr-2" />
            <GitHub />
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
)

export default Footer
