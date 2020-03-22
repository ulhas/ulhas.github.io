import React from "react"

import { TypographyStyle, GoogleFont } from "react-typography"
import Typography from "../../utils/typography"

import { IntrinsicProps } from "../shared/shared"

const Theme = ({ children }: IntrinsicProps) => (
  <>
    <TypographyStyle typography={Typography} />
    <GoogleFont typography={Typography} />
    {children}
  </>
)

export default Theme
