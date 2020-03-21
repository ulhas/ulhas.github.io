import React from "react"
import { Container } from "react-bootstrap"

import { IntrinsicProps } from "../shared/shared"

const Heading = ({ className }: IntrinsicProps) => (
  <h2 className={className}>hi, nice to meet you</h2>
)

const Me = () => (
  <>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum,
      enim eget accumsan ultrices, lacus est vehicula risus, sed placerat urna
      dolor vel velit. Donec suscipit magna elit, eu luctus mauris pulvinar nec.
      Maecenas eu rhoncus arcu, vel pellentesque velit. Nam tincidunt et est
      iaculis venenatis.
    </p>
    <p>
      Aenean fermentum ultrices ante, sit amet elementum enim mattis ac. Aliquam
      eu est iaculis, aliquet neque at, suscipit velit. Donec ac tempus ex, in
      porta sem. Ut vitae ante sit amet nulla pellentesque vestibulum id vel
      odio. Phasellus et ante facilisis, lobortis ante vel, pretium felis. Morbi
      finibus mauris eu pharetra venenatis.
    </p>
    <p>
      Aliquam sem sem, lacinia id lacus et, fringilla fermentum sem. Suspendisse
      potenti. Suspendisse non lobortis ipsum. Ut commodo leo eget rhoncus
      mollis. Nullam blandit laoreet nisi iaculis molestie. Quisque ipsum quam,
      ultrices non tellus nec, vestibulum placerat lorem. Duis malesuada eget
      purus sed porttitor.
    </p>
    <p>
      Suspendisse imperdiet velit sapien, vitae mattis magna tempor non.
      Pellentesque fringilla purus nulla. Proin tincidunt leo sit amet mauris
      aliquet, tempor porttitor mauris elementum. Maecenas pellentesque
      consequat tempus. Suspendisse id nulla egestas, gravida velit sed,
      placerat velit. Maecenas aliquet viverra dolor, sodales tincidunt mauris
      placerat eu.
    </p>
  </>
)

const About = () => (
  <Container>
    <Heading className="my-5" />
    <Me />
  </Container>
)

export default About
