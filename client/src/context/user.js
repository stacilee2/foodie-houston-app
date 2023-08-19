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
        .then(res => res.json())
        .then(data => {
            if (data.error) {
                setLoggedIn(false)
            } else {
                setLoggedIn(true)
                setUser(data)
            }
        })
    }, []);

    function addReservation(formData, restaurantId) {
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
            setUser(user => {
                return {...user, 
                    ...user.reservations, reservations: [...user.reservations, data]}
            })
            navigate('/reservations')
        })
    }

    function handleDeleteClick(e){
        const reservationId = e.target.id
        console.log("reservationId", reservationId);
        fetch(`/reservations/${reservationId}`, {
          method: "DELETE",
        })
        .then((r) => r.json())
        .then((deletedRes) => {
            setUser(user => {
                return {...user, reservations: [...user.reservations.filter(res => res.id !== deletedRes.id)]}
            })
        })
    }
    
    function handleEditRes(formData, reservationId) {
        fetch(`/reservations/${reservationId}`, {
        method: "PATCH",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData),
        })
        .then(r => r.json())
        .then(data => {
            onUpdateRes(data)
            navigate('/reservations')
        })
    }

    function onUpdateRes(updatedRes) {
        console.log("in onUpdateRes function", updatedRes, user.reservations)
        const newReservationsArray = [...user.reservations].filter(res => res.id !== updatedRes.id )
        const updatedReservations = [...newReservationsArray, updatedRes]
        setUser(...user.reservations, updatedReservations)
    }

    function onLogin(user) {
        setUser(user);
        setLoggedIn(true)
        setUser(user.reservations)
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

  return <UserContext.Provider value={{user, addReservation, handleDeleteClick, handleEditRes, onLogin, onLogout, signup, loggedIn}}>{children}</UserContext.Provider>;
}

export { UserContext, UserProvider };