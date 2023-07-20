import React, { useContext } from 'react';
import { UserContext } from './context/user';

function Home() {

    const user = useContext(UserContext)
    console.log(user)

  return (
    <div>Home</div>
  )
}

export default Home