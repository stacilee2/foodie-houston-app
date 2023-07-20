import React, { useContext } from 'react';
import { UserContext } from './context/user';

function Restaurants() {

    const user = useContext(UserContext)
    console.log(user)
    
  return (
    <div>Restaurants</div>
  )
}

export default Restaurants