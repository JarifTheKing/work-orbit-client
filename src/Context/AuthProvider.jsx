import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.config";

export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Register with email
  const registerWithEmail = (email, password) => {
    // setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Log In with email
  const logInWithEmail = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Log in with Google
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Reset Password by Email
  const resetPasswordByEmail = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  // LogOut
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Current user state
  useEffect(() => {
    const unSubscribed = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unSubscribed();
  }, []);

  const shareAuthData = {
    user,
    loading,
    registerWithEmail,
    logInWithEmail,
    signInWithGoogle,
    resetPasswordByEmail,
    logOut,
    setUser,
    setLoading,
  };

  return (
    <div>
      <AuthContext value={shareAuthData}>{children}</AuthContext>
    </div>
  );
};

export default AuthProvider;
