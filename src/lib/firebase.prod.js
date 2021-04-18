import Firebase from 'firebase/app'
import 'firebase/firestore' 
import 'firebase/auth'
import { seedDatabase } from '../seed'

const config = {
    apiKey: "AIzaSyAjP_IOqMyeiKxn9ANdSQP-AU0pCJ25Je0",
    authDomain: "hungnh-nextflix.firebaseapp.com",
    projectId: "hungnh-nextflix",
    storageBucket: "hungnh-nextflix.appspot.com",
    messagingSenderId: "722321515053",
    appId: "1:722321515053:web:0a97c2c012a7bd1778cea4"
}

const firebase = Firebase.initializeApp(config)

// seedDatabase(firebase)

export { firebase }