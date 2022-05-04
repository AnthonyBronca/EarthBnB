import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import './index.css'
import { updateLocation } from "../../store/userLocations";

function LocationEditForm(){
    const locationId = useParams()

    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('USA');
    const [listingDetails, setListingDetails] = useState('')
    const [price, setPrice] = useState(0);
    const [url, setUrl] = useState('');
    const [errors, setErrors] = useState([]);
    const history = useHistory();
    const dispatch = useDispatch();
    const userId = useSelector((state) => {
        return state.session.user.id
    })


    useEffect(()=>{
        const validations = [];
        if(address.length < 5) validations.push('Please enter an Address. Address must be longer than 5 characters.');
        if(city.length < 0) validations.push('Please fill in the City of the requested Location Address.');
        if(state.length === 0 || state.length > 2) validations.push('Please enter a State Abbreviation. Ex(NY) for New York');
        if(country.length === 0) validations.push('Please enter a country. Ex(USA)');
        if(listingDetails.length < 5) validations.push('Please Enter details on your location. Ex: Full 4 Bedroom 3 Bathroom Home')
        if(price < 0 || price > 1000) validations.push('Price must be between 1-999 per night');
        if(url.length < 0) validations.push('Please enter the URL for your image.');
        setErrors(validations);
    }, [address,city,state,country,listingDetails,price,url])

    const handleSubmit = () =>{
            const formValues= {
                locationId,
                userId,
                address,
                city,
                state,
                country,
                name:listingDetails,
                price,
                url
            };
            dispatch(updateLocation(formValues))
            history.push(`/users/${userId}/locations`)
        }
    return (
        <form
  className="edit-location-form"
  onSubmit={handleSubmit}>
      <h2>Update Location Application</h2>
      <ul className="errors">
        {errors.map(error=>(
          <li key={error} id='form-error'>{error}</li>
        ))}
      </ul>
      <div className="form-items">
      <label>Address
          <div>
          <input
          type="Text"
          name="address"
          className='form-input-box'
          value={address}
          onChange={(e)=> setAddress(e.target.value)}></input>
          </div>
      </label>
      </div>
      <div className="form-items">
      <label>City
          <div>
          <input
          type='text'
          name="city"
          className='form-input-box'
          value={city}
          onChange={(e)=>setCity(e.target.value)}></input>
          </div>
      </label>
      </div>
      <div className="form-items">
      <label>State
          <div>
          <input
          type='text'
          name="state"
          className='form-input-box'
          value={state}
          onChange={(e)=> setState(e.target.value)}></input>
          </div>
      </label>
      </div>
      <div className="form-items">
      <label>Country
          <div>
          <input
          type='text'
          name="country"
          className='form-input-box'
          value={country}
          onChange={(e)=> setCountry(e.target.value)}></input>
          </div>
      </label>
      </div>
      <div className="form-items">
      <label>Listing Details
          <div>
          <input
          type='text'
          name="name"
          className='form-input-box'
          value={listingDetails}
          onChange={(e)=>setListingDetails(e.target.value)}></input>
          </div>
      </label>
      </div>
      <div className="form-items">
      <label>Price
          <div>
          <input
          type='text'
          ame="Price"
          className='form-input-box'
          value={price}
          onChange={(e)=>setPrice(e.target.value)}></input>
          </div>
      </label>
      </div>
      <div className="form-items">
      <label>Image URL
          <div>
          <input
          type='text'
          name="URL"
          className='form-input-box'
          value={url}
          onChange={(e)=> setUrl(e.target.value)}></input>
          </div>
      </label>
      </div>
      <button
      type="submit"
      disabled={errors.length > 0}>
          Submit Listing
      </button>
  </form>
    )
}

export default LocationEditForm
