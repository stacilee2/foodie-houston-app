import React, { useContext } from 'react';
import { UserContext } from './context/user';

function Navbar() {
    const user = useContext(UserContext)
    let name = user.name
    console.log(name)

  return (
    <div>Navbar
        <h2>Hello, {name}!</h2>
    </div>
  )
}

export default Navbar