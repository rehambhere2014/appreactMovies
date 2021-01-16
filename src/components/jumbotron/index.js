import React from "react"
import { Container, Inner, Item, Title, SubTitle, Image, Pane } from "./styles/Jumbotron.styles"

export default function Jumbotron ({ children, direction = "row", ...restProps })  {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  )
}

Jumbotron.Container = function ({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>
}
Jumbotron.Title = function ({ children }) {
  return <Title>{children}</Title>
}

Jumbotron.SubTitle = function ({ children }) {
  return <SubTitle>{children}</SubTitle>
}

Jumbotron.Image = function ({ ...restProps }) {
  return <Image {...restProps} />
}
