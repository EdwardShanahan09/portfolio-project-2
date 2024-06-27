// src/Context/Db/DbContext.js
import { createContext, useState, useEffect } from "react";
import { db } from "../../lib/firebase/firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
} from "firebase/firestore";

// Create the DbContext
export const DbContext = createContext({
  getUserDisplayName: () => null,
  addCategory: () => null,
});

// DbProvider component
export const DbProvider = ({ children }) => {
  const addCategory = async (userId, category) => {
    try {
      const categoryCollection = collection(db, "users", userId, "categories");
      const docRef = await addDoc(categoryCollection, category);
      console.log("Category added with ID: ", docRef.id);
      return docRef.id;
    } catch (error) {
      console.error("Error adding category: ", error);
      return null;
    }
  };

  const getUserDisplayName = async (userId) => {
    try {
      const userDoc = doc(db, "users", userId);
      const docSnap = await getDoc(userDoc);
      if (docSnap.exists()) {
        return docSnap.data().displayName;
      } else {
        console.log("No such document!");
        return null;
      }
    } catch (error) {
      console.error("Error getting user display name: ", error);
      return null;
    }
  };

  const value = {
    getUserDisplayName,
    addCategory,
  };

  return <DbContext.Provider value={value}>{children}</DbContext.Provider>;
};
