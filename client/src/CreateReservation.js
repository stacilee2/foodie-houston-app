import React, {useState, useContext} from 'react';
import { UserContext } from './context/user';


function CreateReservation( {restaurantId} ) {

  const {addReservation} = useContext(UserContext)
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    party_size: ""
  });


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
      setFormData("");
      console.log("submit", restaurantId);
      addReservation(formData, restaurantId);
    }

  return (
    <div className="form-container">
      <p>Please choose what date, time, and party size for your reservation below.</p>
      <br />
      <form className="form" onSubmit={handleSubmit} id={restaurantId}>
      <label>Date: </label>
      <select onChange={handleChange} name="date">
        <option value="0">Select Date:</option>
        <option value="2023-07-27">July 27, 2023</option>
        <option value="2023-07-28">July 28, 2023</option>
        <option value="2023-07-29">July 29, 2023</option>
        <option value="2023-07-30">July 30, 2023</option>
        <option value="2023-07-31">July 31, 2023</option>
        <option value="2023-08-01">August 1, 2023</option>
        <option value="2023-08-02">August 2, 2023</option>
        <option value="2023-08-03">August 3, 2023</option>
        <option value="2023-08-04">August 4, 2023</option>
        <option value="2023-08-05">August 5, 2023</option>
      </select>
      <br />
      <br />
      <label>Time: </label>
    <select onChange={handleChange} name="time">
        <option value="0">Select time:</option>
        <option value="5:00">5:00 pm</option>
        <option value="5:30">5:30 pm</option>
        <option value="6:00">6:00 pm</option>
        <option value="6:30">6:30 pm</option>
        <option value="7:00">7:00 pm</option>
        <option value="7:30">7:30 pm</option>
        <option value="8:00">8:00 pm</option>
        <option value="8:30">8:30 pm</option>
        <option value="9:00">9:00 pm</option>
        <option value="9:30">9:30 pm</option>
      </select>
      <br/>
      <br/>
      <label>Number of Guests:</label>
      <select onChange={handleChange} name="party_size">
        <option value="0">Party Size:</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      <br/>
      <br/>
      <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default CreateReservation;