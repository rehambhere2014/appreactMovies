import React, { useContext, useEffect, useState } from "react"
import { FirebaseContext } from "../context/firebase"
export default function useContent(target) {
  const [content, setContent] = useState([])

  const { firebase } = useContext(FirebaseContext)
  useEffect(() => {
    firebase
      .firestore()
      .collection(target)
      .get()
      .then((snapshot) => {
        const allcontent = snapshot.docs.map((item) => ({
          ...item.data(),
          id: item.id,
        }))
        setContent(allcontent)
      })
  }, [])
  return { [target]: content }
}
