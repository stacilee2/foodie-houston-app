import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// create the context
const UserContext = React.createContext();

// create a provider component
function UserProvider({ children }) {

    const [user, setUser] = useState({});
    const [loggedIn, setLoggedIn] = useState(false)
    const [reservations, setReservations] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        fetch('/me')
        .then(res => res.json())
        .then(data => {
            setUser(data)
            if (data.error) {
                setLoggedIn(false)
            } else {
                setLoggedIn(true)
                getReservations()
            } 
        })
    }, []);

    function getReservations() {
        // fetch('/reservations')
        // .then( r => r.json())
        // .then(data => {
        //    setReservations(data)
        // })
    }

    function addReservation(formData, restaurantId) {
        console.log("posted", formData);
        fetch(`/restaurants/${restaurantId}/reservations`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData),
        })
        .then(r => r.json())
        .then(data => {
            console.log(data)
        })
    }
     
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
        setUser({})
        setLoggedIn(false)
    }

  return <UserContext.Provider value={{user, reservations, addReservation, onLogin, onLogout, signup, loggedIn}}>{children}</UserContext.Provider>;
}

export { UserContext, UserProvider };