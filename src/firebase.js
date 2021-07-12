import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAzeEJTqESNrr5fKlYM-U_2VrY_dAn2ZMk",
    authDomain: "to-do-app-66794.firebaseapp.com",
    projectId: "to-do-app-66794",
    storageBucket: "to-do-app-66794.appspot.com",
    messagingSenderId: "223215646746",
    appId: "1:223215646746:web:2a040bf19d74cc5770f9a3",
    measurementId: "G-3LPKWFX13W"
})

const db = firebaseApp.firestore()

export default db;