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
        success: "Logged Successfully!",
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
        success: "",
      };
      return setLoggedInUserData;
    });
};

// Create user with email password
export const createUserWithEmailAndPassword = (email, password) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      const { displayName, email, photoURL } = res.user;

      res.user
        .updateProfile({
          displayName: displayName,
        })
        .then(() => {})
        .catch((error) => {});

      const setLoggedInUserData = {
        isSingedUser: true,
        email: email,
        displayName: displayName,
        photoUrl: photoURL,
        error: "",
        success: "Create user successfully!",
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
        success: "",
      };
      return setLoggedInUserData;
    });
};

// Login with email password
export const signInWithEmailAndPassword = (email, password) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      const { displayName, email, photoURL } = res.user;
      const setLoggedInUserData = {
        isSingedUser: true,
        email: email,
        displayName: displayName,
        photoUrl: photoURL,
        error: "",
        success: "Logged Successfully!",
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
        success: "",
      };
      return setLoggedInUserData;
    });
};
