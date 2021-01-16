import React from "react"
import { Column, Container, Link, Row, Title, Text, Break } from "./styles/Footer.styles"

export default function Footer({ children }) {
  return <Container>{children}</Container>
}
Footer.Title = function ({ children }) {
  return <Title>{children}</Title>
}

Footer.Row = function ({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>
}
Footer.Column = function ({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>
}

Footer.Link = function ({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>
}
Footer.Text = function FooterText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}
Footer.Break = function FooterBreak({ ...restProps }) {
  return <Break {...restProps} />
}
