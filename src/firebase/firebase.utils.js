import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyBoqJKnNVOJDcJqJ4mQuo6UbX1RISSN8b4",
  authDomain: "crwn-db-27255.firebaseapp.com",
  projectId: "crwn-db-27255",
  storageBucket: "crwn-db-27255.appspot.com",
  messagingSenderId: "273274335343",
  appId: "1:273274335343:web:9f79e579f1fe2db1349d9a",
  measurementId: "G-WJ2WZLLK3N",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
