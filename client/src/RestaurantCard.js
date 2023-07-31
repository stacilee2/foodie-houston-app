import React from 'react';
import { NavLink } from 'react-router-dom';
import CreateReservation from './CreateReservation';

function RestaurantCard( {restaurant}) {
    const { id, name, cuisine, description, image_url } = restaurant
  return (
    <div key={id} className="restaurant-card">
    <h3>{name}</h3>
    <h4>{cuisine}</h4>
    <p>{description}</p>
    <img src={image_url} alt={name} className="img" />
    <h4>Make a Reservation</h4>
    <CreateReservation restaurantId = {id} />
    <hr />
    </div>
  )
}

export default RestaurantCard