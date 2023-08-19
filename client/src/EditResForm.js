import React, { useContext, useState} from 'react';
import { UserContext } from './context/user';
import { useParams } from 'react-router-dom';

function EditResForm() {
    const {reservationId} = useParams();
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
      <p>Update your reservation below:</p>
      <hr />
      <br />
      <form className="form" onSubmit={handleSubmit}>
      <label>Date: </label>
      <select onChange={handleChange} name="date">
        <option value="0">Select Date:</option>
        <option value="August 17, 2023">August 17, 2023</option>
        <option value="August 18, 2023">August 18, 2023</option>
        <option value="August 19, 2023">August 19, 2023</option>
        <option value="August 20, 2023">August 20, 2023</option>
        <option value="August 21, 2023">August 21, 2023</option>
        <option value="August 22, 2023">August 22, 2023</option>
        <option value="August 23, 2023">August 23, 2023</option>
        <option value="August 24, 2023">August 24, 2023</option>
        <option value="August 25, 2023">August 25, 2023</option>
        <option value="August 26, 2023">August 26, 2023</option>
        <option value="August 27, 2023">August 27, 2023</option>
        <option value="August 28, 2023">August 28, 2023</option>
        <option value="August 29, 2023">August 29, 2023</option>
        <option value="August 30, 2023">August 30, 2023</option>
        <option value="August 31, 2023">August 31, 2023</option>
        <option value="September 1, 2023">September 1, 2023</option>
        <option value="September 2, 2023">September 2, 2023</option>
        <option value="September 3, 2023">September 3, 2023</option>
        <option value="September 4, 2023">September 4, 2023</option>
        <option value="September 5, 2023">September 5, 2023</option>
        <option value="September 6, 2023">September 6, 2023</option>
        <option value="September 7, 2023">September 7, 2023</option>
        <option value="September 8, 2023">September 8, 2023</option>
        <option value="September 9, 2023">September 9, 2023</option>
        <option value="September 10, 2023">September 10, 2023</option>
        <option value="September 11, 2023">September 11, 2023</option>
        <option value="September 12, 2023">September 12, 2023</option>
        <option value="September 13, 2023">September 13, 2023</option>
        <option value="September 14, 2023">September 14, 2023</option>
        <option value="September 15, 2023">September 15, 2023</option>
        <option value="September 16, 2023">September 16, 2023</option>
        <option value="September 17, 2023">September 17, 2023</option>
      </select>
      <br />
      <br />
      <label>Time: </label>
    <select onChange={handleChange} name="time">
        <option value="0">Select time:</option>
        <option value="5:00 pm">5:00 pm</option>
        <option value="5:15 pm">5:15 pm</option>
        <option value="5:30 pm">5:30 pm</option>
        <option value="5:45 pm">5:45 pm</option>
        <option value="6:00 pm">6:00 pm</option>
        <option value="6:15 pm">6:15 pm</option>
        <option value="6:30 pm">6:30 pm</option>
        <option value="6:45 pm">6:45 pm</option>
        <option value="7:00 pm">7:00 pm</option>
        <option value="7:15 pm">7:15 pm</option>
        <option value="7:30 pm">7:30 pm</option>
        <option value="7:45 pm">7:45 pm</option>
        <option value="8:00 pm">8:00 pm</option>
        <option value="8:15 pm">8:15 pm</option>
        <option value="8:30 pm">8:30 pm</option>
        <option value="8:30 pm">8:45 pm</option>
        <option value="9:00 pm">9:00 pm</option>
        <option value="9:15 pm">9:15 pm</option>
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