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
}

const SocialMediaButton = ({
  className,
  icon,
  href,
}: SocialMediaProps & IntrinsicProps) => (
  <a
    href={href}
    target="_blank"
    className={`text-dark ${className ? className : ""}`}
  >
    <FontAwesomeIcon icon={icon} size={"2x"} />
  </a>
)

const Twitter = (props: IntrinsicProps) => (
  <SocialMediaButton
    icon={faTwitter}
    href="https://www.twitter.com/ulhas_sm"
    {...props}
  />
)

const LinkedIn = (props: IntrinsicProps) => (
  <SocialMediaButton
    icon={faLinkedin}
    href="https://www.linkedin.com/in/ulhasm"
    {...props}
  />
)

const GitHub = (props: IntrinsicProps) => (
  <SocialMediaButton
    icon={faGithub}
    href="https://www.github.com/ulhas"
    {...props}
  />
)

const Footer = () => (
  <Container>
    <div className="float-right">
      <Twitter className="mr-2" />
      <LinkedIn className="mr-2" />
      <GitHub />
    </div>
  </Container>
)

export default Footer
