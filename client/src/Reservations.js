import React, {useContext} from 'react';
import { UserContext } from './context/user';

function Reservations() {

  const {reservations, handleDeleteClick} = useContext(UserContext)

  return (
    <div>
      <h2>Upcoming Reservations:</h2>
      {reservations.map(reservation => 
          <div className="reservation-card" key={reservation.id}>
          <h4>{reservation.restaurant.name}</h4>
          <p>{reservation.date}</p>
          <p>{reservation.time}</p>
          <p>{reservation.party_size}</p>
          <button onClick={handleDeleteClick} id={reservation.id}>Delete</button>
          </div>)
      }
    </div>
  )
}

export default Reservations