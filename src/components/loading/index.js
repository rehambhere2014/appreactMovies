import React from "react"
import { ReleaseBody, Spinner, LockBody, Picture } from "./styles/Loading.styles"

export default function Loading({ src, ...restProps }) {
  return (
    <Spinner {...restProps}>
      <LockBody />
      <Picture src={`/images/users/${src}.png`} data-testid="loading-picture" />
    </Spinner>
  )
}

Loading.ReleaseBody = function () {
  return <ReleaseBody />
}
