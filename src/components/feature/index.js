import React from "react"
import { Container, SubTitle, Title } from "./styles/Feature.styles"
export default function Feature({ children }) {
  return <Container>{children}</Container>
}

Feature.Title = function FeatureTitle({ children }) {
  return <Title>{children}</Title>
}
Feature.SubTitle = function FeatureSubTitle({ children }) {
  return <SubTitle>{children}</SubTitle>
}
