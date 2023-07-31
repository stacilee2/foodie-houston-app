import React, {useContext} from 'react';
import { UserContext } from './context/user';

function Reservations() {

  const {reservations} = useContext(UserContext)
  return (
    <div>
      <h2>Upcoming Reservations:</h2>
      {reservations.map(reservation => <li>{reservation}</li>)}
    </div>
  )
}

export default Reservations