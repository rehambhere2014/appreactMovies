import React, { useContext, useState, useEffect } from "react"

import logo from "../logo.svg"
import * as ROUTES from "../constants/routs"
import { Profile, Header } from "../components"
export default function ProfilesContainer({ logout, user, children, setProfile }) {
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} src={logo} />
          <Header.ButtonLink onClick={() => logout.signOut()}>Logo Out</Header.ButtonLink>
        </Header.Frame>
      </Header>
      <Profile>
        <Profile.Title>Who's watching?</Profile.Title>
        <Profile.List>
          <Profile.Item onClick={() => setProfile({ displayName: user.displayName, photoURL: user.photoURL })}>
            <Profile.Picture src={user.photoURL} />
            <Profile.Name>{user.displayName}</Profile.Name>
          </Profile.Item>
        </Profile.List>
      </Profile>
    </>
  )
}
