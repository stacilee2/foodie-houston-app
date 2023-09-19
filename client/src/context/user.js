import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = React.createContext();

function UserProvider({ children }) {

    const [user, setUser] = useState({
        user: "",
        reservations: [],
        restaurants: []
    });

    const [userRestaurants, setUserRestaurants] = useState([])

    const [loggedIn, setLoggedIn] = useState(false)
    const navigate = useNavigate()

        useEffect(() => {
            fetch('/me')
            .then((r) => {
                if (r.ok) {
                r.json().then((user) => onLogin(user))
                
                }
            });
        }, []);
    

    function onLogin(user) {
        setUser(user);
        setLoggedIn(true)
        setUserRestaurants(user.user_restaurants)
    }

    function signup(user) {
        setUser(user)
        setLoggedIn(true)
    }

    function handleLogout() {
        fetch("/logout", {
            method: "DELETE",
          }).then(() => onLogout())
    };
    
    function onLogout() {
        setUser({
            user: "",
            reservations: [],
            restaurants: []
        })
        setLoggedIn(false)
        navigate("/restaurants")
    }

    const [restaurantsList, setRestaurantsList] = useState([])

    useEffect(() => {
        fetch("/restaurants")
        .then(res => res.json())
        .then(data => setRestaurantsList(data))
    }, []);

  return <UserContext.Provider value={{user, setUser, onLogin, handleLogout, signup, loggedIn, setRestaurantsList, restaurantsList, userRestaurants, setUserRestaurants}}>{children}</UserContext.Provider>;
}

export { UserContext, UserProvider };