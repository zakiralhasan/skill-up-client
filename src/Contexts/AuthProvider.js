import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  //create new user through email and password
  const creatUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //user login with email and password
  const userLoginWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
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
    logOutUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
