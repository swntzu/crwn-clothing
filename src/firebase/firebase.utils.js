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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export default firebase;
