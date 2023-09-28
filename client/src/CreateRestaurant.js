import React, {useState, useContext} from 'react';
import { UserContext } from './context/user';
import { useNavigate } from 'react-router-dom';

function CreateRestaurant () {
  const { setRestaurantsList, restaurantsList} = useContext(UserContext);
  const navigate = useNavigate();
  const [errorsList, setErrorsList] = useState([])
  const [restFormData, setRestFormData] = useState({
      name: "",
      cuisine: "",
      description: "",
      image_url: "",
      menu: ""
    });

      function handleChange(e) {
        const name = e.target.name
        const value = e.target.value
  
        setRestFormData({
          ...restFormData,
          [name]: value
        })
      };

      function handleSubmit(e) {
        e.preventDefault();
        addRestaurant(restFormData);
        setRestFormData({
            name: "",
            cuisine: "",
            description: "",
            image_url: "",
            menu: ""
        });
      }
  
      function addRestaurant(restFormData) {
        fetch(`/restaurants`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(restFormData),
        })
        .then(r => { 
          if (r.ok) {
              r.json().then((newRestaurant) => {
                setRestaurantsList([...restaurantsList, newRestaurant])
                navigate('/restaurants')})
          } else {
              r.json().then(res => {
                setErrorsList(res.errors)
              }
          )}
      })
      };

  return (
    <div>
        <form className='create-restaurant-card' onSubmit={handleSubmit}>
        <h4>Create Restaurant Here:</h4>
        <ul className="error-card">{
        errorsList.map((err, index) => 
          <li key={index}>{err}</li>
        )
      }
      </ul>
        <label>Name: </label>
        <br/>
        <input 
            type="text" 
            name="name"
            value={restFormData.name} 
            onChange={handleChange}>
        </input>
        <br />
        <label>Cuisine: </label>
        <br/>
        <input 
            type="text" 
            name="cuisine"
            value={restFormData.cuisine} 
            onChange={handleChange}>
        </input>
        <br />
        <label>Description: </label>
        <br/>
        <input 
            type="text" 
            name="description"
            value={restFormData.description} 
            onChange={handleChange}>
        </input>
        <br />
        <label>Image Link: </label>
        <br/>
        <input 
            type="text" 
            name="image_url"
            value={restFormData.image_url} 
            onChange={handleChange}>
        </input>
        <br />
        <label>Menu: </label>
        <br/>
        <input 
            type="text" 
            name="menu"
            value={restFormData.menu} 
            onChange={handleChange}>
        </input>
        <br />
        <br />
        <button type="submit">Submit</button>
        </form>
    </div>
  )
};

export default CreateRestaurant;
