import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "./firebaseConfig.js";

export const firebaseInitializeApp = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
};

// login with google
export const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then((res) => {
      const { displayName, email, photoURL } = res.user;
      const setLoggedInUserData = {
        isSingedUser: true,
        email: email,
        displayName: displayName,
        photoUrl: photoURL,
        error: "",
        succes: "Logged Successfully!",
      };
      return setLoggedInUserData;
    })
    .catch((error) => {
      const errorMessage = error.message;
      const setLoggedInUserData = {
        isSingedUser: false,
        email: "",
        displayName: "",
        photoUrl: "",
        error: errorMessage,
        succes: "",
      };
      return setLoggedInUserData;
    });
};
