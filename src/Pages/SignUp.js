import React, { useState, useContext } from "react"
import { Form } from "../components"
import FooterContainer from "../containers/FooterContainer"
import HeaderContainer from "../containers/HeaderContainer"
import { FirebaseContext } from "../context/firebase"
import { useHistory } from "react-router-dom"
import * as ROUTS from "../constants/routs"

const initial = { firstName: "", email: "", password: "" }
export default function SignUp() {
  const history = useHistory()
  const { firebase } = useContext(FirebaseContext)
  const [input, setInput] = useState(initial)
  const [error, setError] = useState("")
  const isInvalid = input.firstName === "" || input.email === "" || input.password === ""

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setError(false)
      const result = await firebase.auth().createUserWithEmailAndPassword(input.email, input.password)
      await result.user.updateProfile({
        displayName: input.firstName,
        photoURL: Math.floor(Math.random() * 5) + 1,
      })
      console.log(initial)

      history.push(ROUTS.BROWSE)

      // history.push("/")
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
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSubmit} method="POST">
            <Form.Input type="text" placeholder="Name" name="firstName" value={input.firstName} onChange={handleChange} />

            <Form.Input type="email" placeholder="email" name="email" value={input.email} onChange={handleChange} />
            <Form.Input type="password" placeholder="password" name="password" value={input.password} onChange={handleChange} />
            <Form.Submit>Sign Up</Form.Submit>
          </Form.Base>
          <Form.Text>
            Are You have an account ? <Form.Link to={ROUTS.SIGN_IN}>Sign In now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  )
}
