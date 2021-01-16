import React from "react"
import { Container, Title, Base, Input, Error, TextSmall, Text, Submit, Link } from "./styles/Form.styles"

export default function Form({ children }) {
  return <Container>{children}</Container>
}

Form.Title = function ({ children }) {
  return <Title>{children}</Title>
}
Form.Base = function ({ children, ...restProps }) {
  return <Base {...restProps}>{children}</Base>
}
Form.Input = function ({ ...restProps }) {
  return <Input {...restProps} />
}
Form.Error = function ({ children, ...restProps }) {
  return <Error {...restProps}>{children}</Error>
}
Form.TextSmall = function ({ children }) {
  return <TextSmall>{children}</TextSmall>
}
Form.Text = function ({ children }) {
  return <Text>{children}</Text>
}

Form.Link = function ({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>
}
Form.Submit = function ({ children, ...restProps }) {
  return <Submit {...restProps}>{children}</Submit>
}
