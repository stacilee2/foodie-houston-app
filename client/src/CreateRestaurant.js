import React, {useState, useContext} from 'react';
import { UserContext } from './context/user';
import { useNavigate } from 'react-router-dom';

function CreateRestaurant () {
  const { setRestaurantsList, restaurantsList} = useContext(UserContext);
    const [errorsList, setErrorsList] = useState([]);
    const navigate = useNavigate();
    const [resFormData, setResFormData] = useState({
        name: "",
        cuisine: "",
        description: "",
        image_url: "",
        menu: ""
      });

      function handleChange(e) {
        const name = e.target.name
        const value = e.target.value
  
        setResFormData({
          ...resFormData,
          [name]: value
        })
      };

      function handleSubmit(e) {
        e.preventDefault();
        addRestaurant(resFormData);
        setResFormData({
            name: "",
            cuisine: "",
            description: "",
            image_url: "",
            menu: ""
        });
      }
  
      function addRestaurant(resFormData) {
        console.log(resFormData)
        fetch(`/restaurants`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(resFormData),
        })
        .then(r => { 
            if (r.ok) {
                r.json().then(restaurant=> { 
                  console.log(restaurant)
                    setRestaurantsList([...restaurantsList, resFormData])
                    navigate('/restaurants')})
            } else {
                r.json().then(res => {
                    console.log(res.errors)
                  setErrorsList(res.errors)
                  setTimeout(() => {
                   setErrorsList([])
                  }, 5000);
                }
                )}
        })
    };

  return (
    <div>
        <form className='create-restaurant-card' onSubmit={handleSubmit}>
        <ul className="error-card">{
        errorsList.map((err, index) => 
          <li key={index}>{err}</li>
        )
      } </ul>
        <h4>Create Restaurant Here:</h4>
        <label>Name: </label>
        <input 
            type="text" 
            required="required" 
            placeholder="Enter name" 
            name="name"
            value={resFormData.name} 
            onChange={handleChange}>
        </input>
        <br />
        <label>Cuisine: </label>
        <input 
            type="text" 
            required="required" 
            placeholder="Enter cuisine" 
            name="cuisine"
            value={resFormData.cuisine} 
            onChange={handleChange}>
        </input>
        <br />
        <label>Description: </label>
        <input 
            type="text" 
            required="required" 
            placeholder="Enter description" 
            name="description"
            value={resFormData.description} 
            onChange={handleChange}>
        </input>
        <br />
        <label>Image Link: </label>
        <input 
            type="text" 
            required="required" 
            placeholder="Enter image jpg" 
            name="image_url"
            value={resFormData.image_url} 
            onChange={handleChange}>
        </input>
        <br />
        <label>Menu: </label>
        <input 
            type="text" 
            required="required" 
            placeholder="Enter menu" 
            name="menu"
            value={resFormData.menu} 
            onChange={handleChange}>
        </input>
        <br />
        <br />
        <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default CreateRestaurant;
