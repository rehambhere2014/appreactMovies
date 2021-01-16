import React, { createContext, useState, useContext } from "react"
import { Container, Inner, Item, Title, Frame, Header, Body } from "./styles/Acocordion.styles"
const ToggleContext = createContext()

export default function Accordion({ children }) {
  return (
    <Container>
      <Inner>{children}</Inner>
    </Container>
  )
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}
Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>
}
Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = useState(false)
  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  )
}
Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext)
  return (
    <Header onClick={() => setToggleShow(!toggleShow)} {...restProps}>
      {children}
      {toggleShow ? <img src="/images/icons/close-slim.png" alt="Close" /> : <img src="/images/icons/add.png" alt="Open" />}
    </Header>
  )
}

Accordion.Body = function AccordionBody({ children, ...restProps }) {
  const { toggleShow } = useContext(ToggleContext)

  // return toggleShow ? <Body {...restProps}>{children}</Body> : null
  return (
    <Body className={toggleShow ? "open" : "close"} {...restProps}>
      <span>{children}</span>
    </Body>
  )
}
