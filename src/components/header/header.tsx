import { Link } from "gatsby"
import React from "react"
import { Container, Navbar } from "react-bootstrap"

import Navigation, { NavigationProps } from "../navigation/navigation"

const NavigationBrand = () => (
  <Navbar.Brand>
    <h2>
      <Link to="/" className="text-white bg-dark nav-link">
        {"um"}
      </Link>
    </h2>
  </Navbar.Brand>
)

const NavigationBar = ({ menuLinks }: NavigationProps) => (
  <Navbar>
    <NavigationBrand />
    <Navigation menuLinks={menuLinks} />
  </Navbar>
)

const Header = (props: NavigationProps) => (
  <header>
    <Container>
      <NavigationBar {...props} />
    </Container>
  </header>
)

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
