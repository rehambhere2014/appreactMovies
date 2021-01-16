import React, { useContext, useState, useEffect } from "react"
import BrowserContainer from "../containers/BrowserContainer"

import useContent from "../hoock/useContent"
import selectionFilter from "../utils/selectionFilter"
export default function Browse() {
  const { series } = useContent("series")
  const { films } = useContent("films")
  const slides = selectionFilter({ series, films })
  return (
    <div>
      <BrowserContainer slides={slides} />
    </div>
  )
}
