import { createContext, useState, useEffect } from "react";

import { onAuthStateChangedListener } from "../utils/firebase/firebase.utils";

/* 
  Core logic for this User content is to see if the user is signed in or not. 
  If the User is signed in they will have auth credentials.
  If not, then the values will be returned as NULL.
*/

// the actual value we want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      console.log(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
