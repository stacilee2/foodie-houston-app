import React, { useContext } from 'react';
import { UserContext } from './context/user';
import RestaurantCard from './RestaurantCard';

function Restaurants() {

  const { restaurantsList } = useContext(UserContext)

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