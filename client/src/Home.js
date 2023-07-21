import React, { useContext } from 'react';
import { UserContext } from './context/user';

function Home() {

    const {user} = useContext(UserContext)
    if (!user || user.errors) {
      return(<h3>Please login or signup</h3>)
    } else {
      return (
        <div>
          <h3>{user.name}</h3>
        </div>
      )
    }
    

  return (
    <div>Home</div>
  )
}

export default Home