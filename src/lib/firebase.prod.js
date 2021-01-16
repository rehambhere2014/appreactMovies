import Firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
import { seedDatabase } from "../seed"
const firebaseConfig = {
  apiKey: "AIzaSyCyuQDtcvbhRc26PpwJJK8gwsA4UMhtjKY",
  authDomain: "movies-react-b18f3.firebaseapp.com",
  projectId: "movies-react-b18f3",
  storageBucket: "movies-react-b18f3.appspot.com",
  messagingSenderId: "10231781245",
  appId: "1:10231781245:web:e8f169d3b64fac5c25de14",
}
// Initialize Firebase
const firebase = Firebase.initializeApp(firebaseConfig)
// seedDatabase(firebase)
export { firebase }
