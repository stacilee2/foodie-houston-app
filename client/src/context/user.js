import React, { useEffect, useState } from "react";

// create the context
const UserContext = React.createContext();

// create a provider component
function UserProvider({ children }) {

    const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  function onLogin(user) {
    setUser(user);
  }

  function onLogout() {
    setUser(null);
  }
  // the value prop of the provider will be our context data
  // this value will be available to child components of this provider
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

export { UserContext, UserProvider };