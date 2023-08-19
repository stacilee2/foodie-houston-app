import React, {useContext} from 'react';
import { UserContext } from './context/user';

const Profile = () => {
    const { user } = useContext(UserContext)
    const reservations = user.reservations
    
    return (
    <div className='profile-card'>
        <h3>Profile</h3>
        <p>Name: {user.name} </p>
        <h4>You have reservations at the following restaurants: </h4>
        {reservations.map((reservation) => 
            <li> {reservation.restaurant_name} </li>
        )}
    </div>
  )
}

export default Profile