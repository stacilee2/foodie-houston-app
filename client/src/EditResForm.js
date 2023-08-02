import React, { useContext, useState} from 'react';
import { UserContext } from './context/user';
import { useParams } from 'react-router-dom';

function EditResForm() {

    const {reservationId} = useParams();
    console.log(reservationId)
    const {handleEditRes} = useContext(UserContext)
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
        handleEditRes(formData, reservationId);
        setFormData("");
    }

  return (
    <div className="form-container">
      <p>Update your reservation below:
      </p>
      <br />
      <form className="form" onSubmit={handleSubmit}>
      <label>Date: </label>
      <select onChange={handleChange} name="date">
        <option value="0">Select Date:</option>
        <option value="August 1, 2023">August 1, 2023</option>
        <option value="August 2, 2023">August 2, 2023</option>
        <option value="August 3, 2023">August 3, 2023</option>
        <option value="August 4, 2023">August 4, 2023</option>
        <option value="August 5, 2023">August 5, 2023</option>
        <option value="August 6, 2023">August 6, 2023</option>
        <option value="August 7, 2023">August 7, 2023</option>
        <option value="August 8, 2023">August 8, 2023</option>
        <option value="August 9, 2023">August 9, 2023</option>
        <option value="August 10, 2023">August 10, 2023</option>
        <option value="August 11, 2023">August 11, 2023</option>
        <option value="August 12, 2023">August 12, 2023</option>
        <option value="August 13, 2023">August 12, 2023</option>
      </select>
      <br />
      <br />
      <label>Time: </label>
    <select onChange={handleChange} name="time">
        <option value="0">Select time:</option>
        <option value="5:00 pm">5:00 pm</option>
        <option value="5:30 pm">5:30 pm</option>
        <option value="6:00 pm">6:00 pm</option>
        <option value="6:30 pm">6:30 pm</option>
        <option value="7:00 pm">7:00 pm</option>
        <option value="7:30 pm">7:30 pm</option>
        <option value="8:00 pm">8:00 pm</option>
        <option value="8:30 pm">8:30 pm</option>
        <option value="9:00 pm">9:00 pm</option>
        <option value="9:30 pm">9:30 pm</option>
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

export default EditResForm;