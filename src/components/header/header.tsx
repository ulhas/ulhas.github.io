import { Link } from "gatsby"
import React from "react"
import { Container, Navbar } from "react-bootstrap"

import Navigation, { NavigationProps } from "../navigation/navigation"

interface NavigationBrandProps {
  siteTitle: string
}

const NavigationBrand = ({ siteTitle }: NavigationBrandProps) => {
  return (
    <Navbar.Brand>
      <small>
        <Link to="/" className="text-dark box-shadow">
          {siteTitle}
        </Link>
      </small>
    </Navbar.Brand>
  )
}

const NavigationBar = ({
  siteTitle,
  menuLinks,
}: NavigationBrandProps & NavigationProps) => {
  return (
    <Navbar>
      <NavigationBrand siteTitle={siteTitle} />
      <Navigation menuLinks={menuLinks} />
    </Navbar>
  )
}

const Header = (props: NavigationBrandProps & NavigationProps) => (
  <Container>
    <NavigationBar {...props} />
  </Container>
)

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
