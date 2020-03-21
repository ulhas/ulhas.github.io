import { Link } from "gatsby"
import React from "react"
import { Container, Navbar } from "react-bootstrap"

import Navigation, { NavigationProps } from "../navigation/navigation"

const NavigationBrand = () => {
  return (
    <Navbar.Brand>
      <Link to="/" className="text-white bg-dark nav-link h2 font-weight-bold">
        {"um"}
      </Link>
    </Navbar.Brand>
  )
}

const NavigationBar = ({ menuLinks }: NavigationProps) => {
  return (
    <Navbar>
      <NavigationBrand />
      <Navigation menuLinks={menuLinks} />
    </Navbar>
  )
}

const Header = (props: NavigationProps) => (
  <Container>
    <NavigationBar {...props} />
  </Container>
)

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
