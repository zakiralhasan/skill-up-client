import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //create new user through email and password
  const creatUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //user login with email and password
  const userLoginWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //login user through google
  const loginUserWithGoogle = (provider) => {
    return signInWithPopup(auth, provider);
  };

  //monitoring login user
  useEffect(() => {
    const unsubscribeUser = () => {
      onAuthStateChanged(auth, (currentUser) => {
        //used for user email verification issue resolve
        // if (currentUser === null || currentUser.emailVerified) {
        //   setUser(currentUser);
        // }
        setUser(currentUser);
      });
      setLoading(false);
    };
    return () => unsubscribeUser();
  }, []);

  //logout user
  const logOutUser = () => {
    return signOut(auth);
  };

  const authInfo = {
    user,
    creatUser,
    userLoginWithEmailAndPassword,
    loginUserWithGoogle,
    logOutUser,
    loading,
    setLoading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
