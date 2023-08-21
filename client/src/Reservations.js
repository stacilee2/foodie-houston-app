import React, {useContext} from 'react';
import { UserContext } from './context/user';
import { useNavigate } from 'react-router-dom';

function Reservations() {

  const { user, handleDeleteClick} = useContext(UserContext)
  const reservations = user.reservations
  const navigate = useNavigate()

  function handleEditClick(e) {
    let reservation = e.target.value
    let reservationId = e.target.id
    navigate(`/reservations/${reservation}/${reservationId}/reservation/edit`)
  }

  return (
    <div>
      <h2>Upcoming Reservations:</h2>
      {reservations.map(reservation => 
          <div className="reservation-card" key={reservation.id}>
          <h4>{reservation.restaurant_name}</h4>
          <p>Date: {reservation.date}</p>
          <p>Time: {reservation.time}</p>
          <p>Number of guests: {reservation.party_size}</p>
            <button onClick={handleDeleteClick} id={reservation.id}>Delete</button> 
            <button onClick={handleEditClick} 
                    id={reservation.id} 
                    value={[reservation.restaurant_name, reservation.date, reservation.time, reservation.party_size]}>
                    Edit
            </button> 
            
            {/* <NavLink to={`/reservations/${reservation.id}/reservation/edit`} element={<EditResForm name={reservation.id.restaurant_name}/>}>
              Edit Reservation
            </NavLink> */}
          <hr />
          </div>)
      }
    </div>
  )
}

export default Reservations