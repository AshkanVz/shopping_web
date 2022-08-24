import React, { useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase";

const UserContext = React.createContext();
export const UserAuth = () => useContext(UserContext);

const AuthContext = ({ children }) => {
  const [user, setUser] = useState({});

  const createUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const resetPass = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) =>
      setUser(currentUser)
    );
    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider
      value={{ user, createUser, logIn, logOut, resetPass }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default AuthContext;
