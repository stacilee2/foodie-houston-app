import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = React.createContext();

function UserProvider({ children }) {

    const [user, setUser] = useState({
        user: "",
        reservations: [],
        restaurants: []
    });

    const [loggedIn, setLoggedIn] = useState(false)
    const navigate = useNavigate();
   
    useEffect(() => {
        fetch('/me')
        .then((r) => {
            if (r.ok) {
              r.json().then((user) => onLogin(user))
            }
        }, []);
    });
        
    function onLogin(user) {
        setUser(user);
        setLoggedIn(true)
        navigate('/restaurants')
    }

    function signup(user) {
        setUser(user)
        setLoggedIn(true)
    }

    function onLogout() {
        setLoggedIn(false)
        setUser({})
    }

  return <UserContext.Provider value={{user, setUser, onLogin, onLogout, signup, loggedIn}}>{children}</UserContext.Provider>;
}

export { UserContext, UserProvider };