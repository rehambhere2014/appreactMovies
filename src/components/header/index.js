import React, { useState } from "react"
import { Background, ButtonLink, Container, Play, Group, Profile, Logo, Feature, FeatureTitle, FeatureText, TextLink, Picture, Dropdown, Search, SearchIcon, SearchInput } from "./styles/Header.styles"
import { Link as ReachRouterLink } from "react-router-dom"

export default function Header({ bg = true, children, ...restProps }) {
  return bg ? <Background {...restProps}>{children}</Background> : children
}

Header.Frame = function HeaderFrame({ children }) {
  return <Container>{children}</Container>
}

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReachRouterLink to={to}>
      <Logo {...restProps} />
    </ReachRouterLink>
  )
}
Header.Dropdown = function ({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>
}
Header.Profile = function ({ children }) {
  return <Profile>{children}</Profile>
}
Header.Picture = function ({ src, ...restProps }) {
  return <Picture {...restProps} src={`/images/users/${src}.png`} />
}
Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>
}
Header.TextLink = function ({ children, ...restProps }) {
  return <TextLink {...restProps}>{children}</TextLink>
}
Header.Feature = function ({ children }) {
  return <Feature>{children}</Feature>
}

Header.FeatureTitle = function ({ children }) {
  return <FeatureTitle>{children}</FeatureTitle>
}
Header.FeatureText = function ({ children }) {
  return <FeatureText>{children}</FeatureText>
}
Header.Play = function ({ children, ...restProps }) {
  return <Play {...restProps}>{children} </Play>
}

Header.Group = function ({ children }) {
  return <Group>{children}</Group>
}

Header.Search = function HeaderSearch({ searchTerm, setSearch, ...restProps }) {
  const [searchActive, setSearchActive] = useState(false)

  return (
    <Search {...restProps}>
      <SearchIcon onClick={() => setSearchActive(!searchActive)}>
        <img src="/images/icons/search.png" alt="Search" />
      </SearchIcon>
      <SearchInput value={searchTerm} onChange={({ target }) => setSearch(target.value)} placeholder="Search films and series" active={searchActive} />
    </Search>
  )
}
