import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from './context/user';
import EditResForm from './EditResForm';

function Reservations() {

  const { user, handleDeleteClick } = useContext(UserContext)

  const reservations = user.reservations

  return (
    <div>
      <h2>Upcoming Reservations:</h2>
      {reservations.map(reservation => 
          <div className="reservation-card" key={reservation.id}>
          <h4>{reservation.restaurant_name}</h4>
          <p>Date: {reservation.date}</p>
          <p>Time: {reservation.time}</p>
          <p>Number of guests: {reservation.party_size}</p>
          <div className="edit-delete-button">
            <button onClick={handleDeleteClick} id={reservation.id}>Delete</button>  
            <NavLink  to={`/reservations/${reservation.id}/reservation/edit`} 
                      element={<EditResForm />}>
                        Edit Reservation
            </NavLink>
          </div>
          <hr />
          </div>)
      }
    </div>
  )
}

export default Reservations