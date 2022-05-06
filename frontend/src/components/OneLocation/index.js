import './index.css'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { getUserLocations } from '../../store/userLocations.js';
import { useHistory, useParams } from 'react-router-dom'
// import { getUserLocations, deleteUserLocations, updateLocation} from '../../store/userLocations'
import { getOneLocation } from '../../store/oneLocation';
import { getUserReviews } from '../../store/reviews';
import StarRating from './starrating';


function OneLocation() {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user)
    const { id } = useParams()
    const location = useSelector(state => state.oneLocation.location)
    const allReviews = useSelector(state => state.reviews)
    const reviewArr = Object.values(allReviews);
    console.log(reviewArr, "rev?")
    // const locations = Object.values(allLocations)
    // console.log(locations, '***** this is what i want')
    const [errors, setErrors] = useState([])
    const [rating, setRating] = useState(0)
    const [review, setReview] = useState('')


useEffect(()=> {

})


    useEffect(() => {
        if (sessionUser) {
            const locationId = id
            const userId = sessionUser.id
            dispatch(getOneLocation(locationId))
            dispatch(getUserReviews(userId))
        }
    }, [dispatch]) //maybe delete alllocations from here

    function deleteItem(e, locationId) {
        e.preventDefault();
        e.stopPropagation()
        // return dispatch(deleteUserLocations(locationId))
    }

    console.log(rating)

    // useEffect(()=>{
    //     const validations = [];
    //     if(address.length < 5) validations.push('Please enter an Address. Address must be longer than 5 characters.');
    //     if(city.length < 0) validations.push('Please fill in the City of the requested Location Address.');
    //     if(state.length === 0 || state.length > 2) validations.push('Please enter a State Abbreviation. Ex(NY) for New York');
    //     if(country.length === 0) validations.push('Please enter a country. Ex(USA)');
    //     if(listingDetails.length < 5) validations.push('Please Enter details on your location. Ex: Full 4 Bedroom 3 Bathroom Home')
    //     if(price < 0 || price > 1000) validations.push('Price must be between 1-999 per night');
    //     if(url.length < 0) validations.push('Please enter the URL for your image.');
    //     setErrors(validations);
    // }, [address,city,state,country,listingDetails,price,url])

    const handleSubmit = () => {
        const formValues = {
            review
        };
        // dispatch(postNewLocation(formValues))
        // history.push(`/user/${userId}locations`)
    }



    return (
        <>
            <div>
                <div key={`${location.id}`} id="card-container">
                    <div className="house-cards">
                        <img
                            src={`${location.Images[0]?.url}`}
                            className="house-listing-img"
                            alt="house for listing"
                        ></img>
                        <div className="house-details">
                            <h1 className='user-listings-header'>{`${location.address} ${location.city}, ${location.state}`}</h1>
                            <span>{`$${location.price} night`}</span>
                        </div>
                    </div>
                    <div id="main-container">
                        <div id="locations-layout">
                        </div>
                    </div>
                </div>
                <div className='review-card'>
                    {allReviews ? reviewArr.map((review) => {
                        return (
                            <div key={`${review.id}`} id="card-container">
                                <div className="house-cards">
                                    <a href={`/locations/${review.id}`} id="a-locations-tag">
                                        <div className="house-details">
                                            <h3>{`${review.review}`}</h3>
                                            <span>{`Review: ${review.rating}`}</span>
                                        </div>
                                    </a>
                                    <div className='user-locations-buttons'>
                                        {/* <button className='user-listings-edit-button' id={`edit-button-${review.id}`} onClick={(e) => {editButton(e, review.id)}} >Edit Review</button> */}
                                        <button type="submit" className='user-listings-delete-button' id={`delete-button-${review.id}`}
                                            onClick={(e) => deleteItem(e, review.id)}>Delete Review</button>
                                    </div>
                                </div>
                            </div>
                        );
                    }) : <h2>Loading</h2>}
                </div>
                <div className='input-review-box'>
                    <form
                        className='new-location-form'
                        onSubmit={handleSubmit}>
                        <h2>New Review</h2>
                        {/* <ul className="errors">
                            {errors.map(error => (
                                <li key={error} id='form-error'>{error}</li>
                            ))}
                        </ul> */}
                        <div className="form-items">
                            <label>Have a Review? Enter it here
                                <div>
                                    <input
                                        type="Text"
                                        name="review"
                                        className='form-input-box'
                                        value={review}
                                        onChange={(e) => setReview(e.target.value)}></input>
                                </div>
                            </label>
                            <label>Rating
                                <div>
                                    <div>
                                        <label>1
                                            <input
                                                type='radio'
                                                name='rating-buttons'
                                                className='rating-buttons'
                                                value={1}
                                                onChange={(e) => setRating(e.target.value)}
                                                checked={1}
                                            >
                                            </input>
                                        </label>
                                    </div>
                                    <div>
                                        <label>2
                                            <input
                                                type='radio'
                                                name='rating-buttons'
                                                className='rating-buttons'
                                                value={2}
                                                onChange={(e) => setRating(e.target.value)}
                                                checked={2}
                                            ></input>
                                        </label>
                                    </div>
                                    <div>
                                        <label>3

                                            <input
                                                type='radio'
                                                name='rating-buttons'
                                                className='rating-buttons'
                                                value={3}
                                                onChange={(e) => setRating(e.target.value)}
                                                checked={3}
                                            ></input>
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            4
                                            <input
                                                type='radio'
                                                name='rating-buttons'
                                                className='rating-buttons'
                                                value={4}
                                                onChange={(e) => setRating(e.target.value)}
                                                checked={rating !== 4}
                                            ></input>
                                        </label>
                                    </div>
                                    <div>
                                        <label>5

                                            <input
                                                type='radio'
                                                name='rating-buttons'
                                                className='rating-buttons'
                                                value={5}
                                                onChange={(e) => setRating(e.target.value)}
                                                checked={rating !== 5}
                                            ></input>
                                        </label>
                                    </div>
                                    <div>
                                        <StarRating />
                                    </div>
                                </div>
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )

}

export default OneLocation
