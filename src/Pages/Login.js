import React, { useState, useContext } from "react"

import { Form } from "../components"
import FooterContainer from "../containers/FooterContainer"
import HeaderContainer from "../containers/HeaderContainer"
import { useHistory } from "react-router-dom"
import { FirebaseContext } from "../context/firebase"
import * as ROUTS from "../constants/routs"
const initial = { email: "", password: "" }
export default function Login() {
  const history = useHistory()
  const { firebase } = useContext(FirebaseContext)

  const [input, setInput] = useState(initial)
  const [error, setError] = useState("")
  const isInvalid = input.email === "" || input.password === ""

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setError(false)
      await firebase.auth().signInWithEmailAndPassword(input.email, input.password)
      history.push(ROUTS.BROWSE)
    } catch (error) {
      setError(error.message)
      setInput("")
    }
  }
  const handleChange = ({ target }) => {
    setInput({
      ...input,
      [target.name]: target.value,
    })
  }
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSubmit}>
            <Form.Input type="email" placeholder="email" name="email" value={input.email} onChange={handleChange} />
            <Form.Input type="password" placeholder="password" name="password" value={input.password} onChange={handleChange} />
            <Form.Submit>Sign In</Form.Submit>
          </Form.Base>
          <Form.Text>
            New to Netflix? <Form.Link to={ROUTS.SIGN_UP}>Sign up now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  )
}
