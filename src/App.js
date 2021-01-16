import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Home, Login, SignUp, Browse } from "./Pages"
import * as ROUTES from "./constants/routs"
import { useAuthListener } from "./hoock/useAuthListener"
import { IsUserRedirect, ProtectedRoute } from "./helprs/routes"

export default function App() {
  const { user } = useAuthListener()

  return (
    <>
      <BrowserRouter>
        <Switch>
          <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN} exact>
            <Login />
          </IsUserRedirect>
          <ProtectedRoute user={user} path={ROUTES.BROWSE}>
            <Browse />
          </ProtectedRoute>
          <IsUserRedirect path={ROUTES.SIGN_UP} user={user} loggedInPath={ROUTES.BROWSE}>
            <SignUp />
          </IsUserRedirect>
          <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
            <Home />
          </IsUserRedirect>
        </Switch>
      </BrowserRouter>
    </>
  )
}
