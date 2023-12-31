import React, {useContext} from 'react';
import { NavLink} from 'react-router-dom';
import CreateReservation from './CreateReservation';
import { UserContext } from './context/user';

function RestaurantCard({restaurant}) {
   
    const {loggedIn } = useContext(UserContext)
    const { id, name, cuisine, description, menu, image_url } = restaurant
  
 
    if (loggedIn) {
      return (
        <div key={id} className="restaurant-card">
          <h3>{name}</h3>
          <h4>{cuisine}</h4>
          <p>{description}</p>
          <img src={image_url} alt={name} className="img" referrerPolicy="no-referrer" />
          <p>Menu: <a href={menu} target="_blank" rel="noreferrer">{menu}</a></p>
          <h4>Make a Reservation</h4>
          <CreateReservation restaurantId = {id} />
        </div>
        )
    } else {
      return (
        <div key={id} className="restaurant-card">
          <h3>{name}</h3>
          <h4>{cuisine}</h4>
          <p>{description}</p>
          <img src={image_url} alt={name} className="img" referrerPolicy="no-referrer"/>
          <p>Menu: <a href={menu} target="_blank" rel="noreferrer">{menu}</a></p>
          <br />
          <NavLink to="/login">Login to make reservation</NavLink>
          <br/>
        </div>
      )
    }
};


export default RestaurantCard;