/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import axios from "axios";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

// Initialize Firebase Auth
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null); // Add user state to track the logged-in user
  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google Sign-In function
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider).finally(() =>
      setLoading(false),
    );
  };

  // Log Out function
  const logOut = () => {
    setLoading(true);
    return signOut(auth).finally(() => setLoading(false));
  };

  // Monitor authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser); // Update user state when authentication state changes
      // Stop loading when state changes
      if (currentUser) {
        console.log(currentUser);
        const res = await axios.post(
          `https://new-watch-server.vercel.app/jwt`,
          {
            email: currentUser.email,
          },
        );
        if (res.data) {
          localStorage.setItem("auth", res.data);
          setLoading(false);
        }
      } else {
        localStorage.removeItem("auth");
        setLoading(false);
      }
    });

    // Cleanup on unmount
    return () => unsubscribe();
  }, []);

  // Provide user, loading state, googleSignIn, and logOut to children components
  const authInfo = {
    googleSignIn,
    createUser,
    logOut,
    user, // Provide user state to the context
    loading,
    signIn,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
