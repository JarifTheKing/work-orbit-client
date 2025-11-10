import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile as firebaseUpdateProfile,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.config";

export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //  Register with Email
  const registerWithEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Log In with Email
  const logInWithEmail = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //  Log in with Google
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //  Reset Password by Email
  const resetPasswordByEmail = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  //  Update User Profile
  const updateUserProfile = (displayName, photoURL) => {
    return firebaseUpdateProfile(auth.currentUser, {
      displayName,
      photoURL,
    });
  };

  //  Log Out
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  //  Current User
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unSubscribe();
  }, []);

  const shareAuthData = {
    user,
    loading,
    registerWithEmail,
    logInWithEmail,
    signInWithGoogle,
    resetPasswordByEmail,
    updateUserProfile,
    logOut,
    setUser,
    setLoading,
  };

  return <AuthContext value={shareAuthData}>{children}</AuthContext>;
};

export default AuthProvider;
