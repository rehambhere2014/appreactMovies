import React from "react"
import { Container, Item, List, Name, Picture, Title } from "./styles/Profile.styles"

export default function Profile({ children }) {
  return <Container>{children}</Container>
}

Profile.Title = function ({ children }) {
  return <Title>{children}</Title>
}

Profile.List = function ({ children }) {
  return <List>{children}</List>
}

Profile.Item = function ({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>
}

Profile.Name = function ({ children }) {
  return <Name>{children}</Name>
}

Profile.Picture = function ({ src, ...restProps }) {
  return <Picture {...restProps} src={src ? `/images/users/${src}.png` : "/images/misc/loading.gif"} />
}
