import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCQE_VelU3RYpnD6i5yI7X3wD_oT84cEVw",
    authDomain: "linked-in-demo.firebaseapp.com",
    projectId: "linked-in-demo",
    storageBucket: "linked-in-demo.appspot.com",
    messagingSenderId: "1098871626202",
    appId: "1:1098871626202:web:687af0f6d41986722008e3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
const auth = firebase.auth();

export {db, auth};