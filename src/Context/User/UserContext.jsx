// src/Context/User/UserContext.js
import { createContext, useState, useEffect } from "react";
import { auth, createUserDocument } from "../../lib/firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

// Create the UserContext
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// UserProvider component
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        await createUserDocument(user);
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const value = { currentUser, setCurrentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
