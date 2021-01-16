import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "normalize.css"
import { firebase } from "./lib/firebase.prod"
import { GlobalStyles } from "./GlobalStyle"
import { FirebaseContext } from "./context/firebase"
ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById("root")
)
