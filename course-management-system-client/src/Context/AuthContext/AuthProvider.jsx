import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.init";

const provider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isDark, setIsDark] = useState(false);

  // create user
  const createUser = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // user Profile Update
  const userProfileUpdate = (userObj) => {
    return updateProfile(auth.currentUser, userObj);
  };

  // google register and login
  const googleLoggedIn = () => {
    setIsLoading(true);
    return signInWithPopup(auth, provider);
  };
  // google register and login
  const gutHubLoggedIn = () => {
    setIsLoading(true);
    return signInWithPopup(auth, gitProvider);
  };

  // login user
  const loginUser = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logout user
  const logOutUser = () => {
    return signOut(auth);
  };

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const userInfo = {
    user,
    setUser,
    isLoading,
    isDark,
    setIsDark,
    createUser,
    userProfileUpdate,
    googleLoggedIn,
    loginUser,
    logOutUser,
    resetPassword,
    gutHubLoggedIn,
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
