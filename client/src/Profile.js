import React, {useContext} from 'react';
import { UserContext } from './context/user';

const Profile = () => {
    const { user } = useContext(UserContext)

    const userRestaurants = user.restaurants.map(restaurant => {
        return (<li key={restaurant.id}>{restaurant.name}</li>)
    })
    return (
        <div className='profile-card'>
            <h3>Profile</h3>
            <p>Name: {user.name} </p>
            <h4>You have reservations at the following restaurants: </h4>
            {userRestaurants}
        </div>
    )
};

export default Profile;