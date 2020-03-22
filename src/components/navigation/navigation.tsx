import React from "react"
import { Link } from "gatsby"
import { Nav } from "react-bootstrap"

export interface NavigationItemProps {
  name: string
  link: string
}

export interface NavigationProps {
  menuLinks: [NavigationItemProps]
}

const Navigation = ({ menuLinks }: NavigationProps) => (
  <Nav className="ml-auto">
    {menuLinks.map(link => {
      return <NavigationItem key={link.name} {...link} />
    })}
  </Nav>
)

const NavigationItem = ({ name, link }: NavigationItemProps) => (
  <Nav.Item>
    <h3>
      <Link
        to={link}
        className="nav-link"
        activeClassName="nav-link active text-primary"
      >
        {name}
      </Link>
    </h3>
  </Nav.Item>
)

export default Navigation
