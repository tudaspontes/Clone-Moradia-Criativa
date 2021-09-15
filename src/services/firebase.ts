import firebase from 'firebase/app'

import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyC1YGozxWFIbqzBUXKp80l52aiJzyc4sFA",
  authDomain: "moradiacriativa-38129.firebaseapp.com",
  projectId: "moradiacriativa-38129",
  storageBucket: "moradiacriativa-38129.appspot.com",
  messagingSenderId: "947292491830",
  appId: "1:947292491830:web:b09b0d8e09f8267a3f0897",
  measurementId: "G-624WR7S7GK"
};
// Initialize Firebase

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth()
const database = firebase.database()
const firestore = firebase.firestore()

export { firebase, auth, database, firestore }

// TODO CRIAR AS VARIÁVEIS DE AMBIENTE.

// var firebaseConfig = {
//   apiKey:process.env.FIREBASE_API_KEY,
//   authDomain:process.env.FIREBASE_AUTH_DOMAIN,
//   projectId:process.env.FIREBASE_PROJECT_ID,
//   storageBucket:process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId:process.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId:process.env.FIREBASE_APP_ID,
//   measurementId:process.env.FIREBASE_MEASUREMENT_ID
// };