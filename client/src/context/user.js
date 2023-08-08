import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = React.createContext();

function UserProvider({ children }) {

    const [user, setUser] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false)
    const [reservations, setReservations] = useState([])
    const navigate = useNavigate();
    const [restaurantsList, setRestaurantsList] = useState([])

    useEffect(() => {
        fetch("/restaurants")
        .then(res => res.json())
        .then(data => setRestaurantsList(data))
    }, []);


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
        fetch('/reservations')
        .then( r => r.json())
        .then(data => {
           setReservations(data)
        })
    }

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
            setReservations([...reservations, data])
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
        .then((deletedRes) => handleDeleteRes(deletedRes))
    }
    
    function handleDeleteRes(deletedRes){
        const filteredReservations = [...reservations].filter(res => res.id !== deletedRes.id)
        setReservations(filteredReservations);
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
        const newReservationsArray = [...reservations].filter(res => res.id !== updatedRes.id )
        const updatedReservations = [...newReservationsArray, updatedRes]
        setReservations(updatedReservations)
    }

    function onLogin(user) {
        setUser(user);
        setLoggedIn(true)
        getReservations()
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

  return <UserContext.Provider value={{user, restaurantsList, reservations, addReservation, handleDeleteClick, handleEditRes, onLogin, onLogout, signup, loggedIn}}>{children}</UserContext.Provider>;
}

export { UserContext, UserProvider };