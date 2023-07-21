import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from './context/user';
import RestaurantCard from './RestaurantCard';

function Restaurants() {

    const [restaurantsList, setRestaurantsList] = useState([])

    useEffect(() => {
        fetch("/restaurants")
        .then(res => res.json())
        .then(data => setRestaurantsList(data))
    }, []);

    console.log(restaurantsList)

    const user = useContext(UserContext)
    console.log(user)

  return (
    <div>
        {restaurantsList.map(restaurant => {
            return(<RestaurantCard restaurant={restaurant} key={restaurant.id}/>)
        })}
    </div>
  )
}

export default Restaurants