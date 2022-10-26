import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
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
  const loginUserWithGoogle = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  //monitoring login user
  useEffect(() => {
    const unsubscribeUser = () => {
      onAuthStateChanged(auth, (currentUser) => {
        // used for user email verification issue resolve
        if (currentUser === null || currentUser.emailVerified) {
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
    loading,
    setLoading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
