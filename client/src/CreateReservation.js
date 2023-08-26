import React, {useState, useContext, useEffect} from 'react';
import { UserContext } from './context/user';
import { useNavigate } from 'react-router-dom';

function CreateReservation( {restaurantId} ) {

  const { setUser } = useContext(UserContext);
  const [errorsList, setErrorsList] = useState([])
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    party_size: ""
  });

  const [reservationDate, setReservationDate] = useState([]);

    
    const dateOptions = reservationDate.map((res, index) => (
      <option key={index} value={res}>{res}</option>
    ));

    function handleChange(e) {
      const name = e.target.name
      const value = e.target.value

      setFormData({
        ...formData,
        [name]: value
      })
    }

    function handleSubmit(e) {
      e.preventDefault();
      addReservation(formData, restaurantId);
      setFormData({
        date: "",
        time: "",
        party_size: ""
      });
    }

    function addReservation(formData, restaurantId) {
      fetch(`/restaurants/${restaurantId}/reservations`, {
      method: "POST",
      headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
      },
      body: JSON.stringify(formData),
      })
      .then(r => { 
          if (r.ok) {
              r.json().then(reservation => { 
                  setUser(user => {
                      return {...user, 
                          ...user.reservations, reservations: [...user.reservations, reservation]}
                  })
                  navigate('/reservations')})
          } else {
              r.json().then(res => {
                setErrorsList(res.errors)
                setTimeout(() => {
                  setErrorsList([])
                }, 5000);
              }
              )}
      })
  }

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

    // Time options for dropdown
    const arrayOfTimeStr =["5:00", "5:15", "5:30", "5:45", "6:00", "6:15", "6:30", "6:45", "7:00", "7:15", "7:30", "7:45", "8:00", "8:15", "8:30", "8:45", "9:00", "9:15", "9:30"]
    const timeOptions = arrayOfTimeStr.map(time => 
      <option key={time} value={time}>{time} pm</option>)

    // Guest number options for dropdown
    const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const guestOptions = arrayOfNumbers.map(num => 
      <option key={num} value={num}>{num}</option>)

  return (
    <div className="form-container">
      <p>Please choose what date, time, and party size for your reservation below.</p>
      <ul className="error-card">{errorsList.map((err, index) => 
        <li key={index}>{err}</li>)}
      </ul>
      <br />
      <form className="form" onSubmit={handleSubmit} id={restaurantId}>
      <label>Date: </label>
      <select onChange={handleChange} name="date" required>
        <option value="0">Select Date:</option>
        {dateOptions}        
      </select>
      <br />
      <br />
      <label>Time: </label>
    <select onChange={handleChange} name="time" required>
        <option value="0">Select time:</option>
        {timeOptions}
      </select>
      <br/>
      <br/>
      <label>Number of Guests:</label>
      <select onChange={handleChange} name="party_size" required>
        <option value="0">Party Size:</option>
            {guestOptions}
      </select>
      <br/>
      <br/>
      <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default CreateReservation;