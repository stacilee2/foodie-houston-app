import React, { useContext, useState, useEffect} from 'react';
import { UserContext } from './context/user';
import { useParams, useNavigate} from 'react-router-dom';

function EditResForm() {

    const {reservation, reservationId} = useParams();
    const {user, setUser} = useContext(UserContext);
    const [formData, setFormData] = useState("");
    const [reservationDate, setReservationDate] = useState([]);
    const navigate = useNavigate()

    const currentReservation = reservation.split(",");
    const restaurantName = currentReservation[0];
    const dateStr = currentReservation[1] + "," + currentReservation[2];
    const timeStr = currentReservation[3];
    const guestNumber = currentReservation[4];

    // Date options for dropdown
    useEffect(() => {
      const arrayOfMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
      const today = new Date()
      let dateArray = [];
      for (let i = 0; i < 30; i++) {
        const date = new Date();
        date.setDate(today.getDate() + i);    
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();
        const dateStr = arrayOfMonths[month] + " " + day + ", " + year;
        dateArray.push(dateStr);
      }
      setReservationDate(dateArray);
    }, []);

    const dateOptions = reservationDate.map((res, index) => (
        <option key={index} value={res}>{res}</option>
      ))

    // Time options for dropdown
    const arrayOfTimeStr =["5:00", "5:15", "5:30", "5:45", "6:00", "6:15", "6:30", "6:45", "7:00", "7:15", "7:30", "7:45", "8:00", "8:15", "8:30", "8:45", "9:00", "9:15", "9:30"]
    const timeOptions = arrayOfTimeStr.map(time => 
      <option key={time} value={time}>{time} pm</option>)

    // Guest number options for dropdown
    const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const guestOptions = arrayOfNumbers.map(num => 
      <option key={num} value={num}>{num}</option>)
    
    function handleChange(e) {
          const name = e.target.name
          const value = e.target.value

          setFormData({
              ...formData,
              [name]: value
          })
        }

    function handleEditRes(formData, reservationId) {
      fetch(`/reservations/${reservationId}`, {
      method: "PATCH",
      headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
      },
      body: JSON.stringify(formData),
      })
      .then(r => r.json())
      .then(updatedRes => {
          const newReservationsArray = [...user.reservations].filter(res => res.id !== updatedRes.id )
          const updatedReservations = [...newReservationsArray, updatedRes]
          setUser(user => {
              return {...user, reservations: updatedReservations}
          })
          navigate('/reservations')
      })
  }
      function handleSubmit(e) {
        e.preventDefault(); 
        handleEditRes(formData, reservationId);
        setFormData("");
      }

    return (
    <div className="form-container">
        <p>Update your reservation below: </p>
          <div className="edit-reservation-card" >
            <h3>{restaurantName}</h3>
              <form className="form" onSubmit={handleSubmit}>
                <label>Date: </label>
                <select onChange={handleChange} name="date" required>
                  <option value={dateStr}>{dateStr}</option>
                    {dateOptions}  
                </select>
                <br />
                <br />
                <label>Time: </label>
                <select onChange={handleChange} name="time" required>
                  <option value={timeStr} >{timeStr} pm</option>
                    {timeOptions}
                </select>
                <br/>
                <br/>
                <label>Number of Guests:</label>
                <select onChange={handleChange} name="party_size" required>
                  <option value={guestNumber}>{guestNumber}</option>
                      {guestOptions}
                </select>
                <br/>
                <br/>
                <button type="submit">Submit</button>
              </form>
          </div>
    </div>
  )
};

export default EditResForm;
