import { useContext, useState, useEffect } from "react"
import { FirebaseContext } from "../context/firebase"

export const useAuthListener = () => {
  const { firebase } = useContext(FirebaseContext)
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("authuser")))

  useEffect(() => {
    firebase.auth().onAuthStateChanged((userAuth) => {
      if (userAuth) {
        localStorage.setItem("authuser", JSON.stringify(userAuth))
        setUser(userAuth)
      } else {
        localStorage.removeItem("authuser")
        setUser(null)
      }
    })
  }, [])

  return { user }
}
