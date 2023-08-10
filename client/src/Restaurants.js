import React, { useState, useEffect } from 'react';
import RestaurantCard from './RestaurantCard';

function Restaurants() {

  const [restaurantsList, setRestaurantsList] = useState([])

  useEffect(() => {
    fetch("/restaurants")
    .then(res => res.json())
    .then(data => setRestaurantsList(data))
  }, []);

  return (
    <div>
      <h3>RESTAURANTS: </h3>
        {restaurantsList.map(restaurant => {
            return(<RestaurantCard restaurant={restaurant} key={restaurant.name}/>)
        })}
    </div>
  )
}

export default Restaurants