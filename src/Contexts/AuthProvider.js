import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const providerGoogle = new GoogleAuthProvider();
  const providerGithub = new GithubAuthProvider();
  const providerFacebook = new FacebookAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //create new user through email and password
  const creatUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //user login with email and password
  const userLoginWithEmailAndPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //take user name and photo URL during registration
  const updateUserProfile = (profile) => {
    setLoading(true);
    return updateProfile(auth.currentUser, profile);
  };

  //login user through google
  const loginUserWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, providerGoogle);
  };

  //monitoring login user
  useEffect(() => {
    const unsubscribeUser = () => {
      onAuthStateChanged(auth, (currentUser) => {
        // used for user email verification issue resolve
        if (
          currentUser === null ||
          currentUser.emailVerified ||
          currentUser.uid
        ) {
          setUser(currentUser);
        }
        setLoading(false);
      });
    };
    return () => unsubscribeUser();
  }, []);

  //user email varify through valid mail
  const userEmailVerification = (email) => {
    setLoading(true);
    return sendEmailVerification(auth.currentUser);
  };

  //login user through Github
  const loginUserWithGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, providerGithub);
  };

  //login user through Facebook
  const loginUserWithFacebook = () => {
    setLoading(true);
    return signInWithPopup(auth, providerFacebook);
  };

  //logout user
  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  //reset user password through email
  const resetUserPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  const authInfo = {
    user,
    creatUser,
    userLoginWithEmailAndPassword,
    loginUserWithGoogle,
    logOutUser,
    updateUserProfile,
    userEmailVerification,
    resetUserPassword,
    loginUserWithGithub,
    loginUserWithFacebook,
    loading,
    setLoading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
