import './index.css'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { getUserLocations } from '../../store/userLocations.js';
import { useHistory, useParams } from 'react-router-dom'
// import { getUserLocations, deleteUserLocations, updateLocation} from '../../store/userLocations'
import { getOneLocation } from '../../store/oneLocation';
import { getUserReviews, addNewReview } from '../../store/reviews';
// import StarRating from './StarRating';
import { FaStar } from 'react-icons/fa';


function OneLocation() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams()
    const sessionUser = useSelector(state => state.session.user)
    console.log(id, "THIS IS ID!!!!")
    const location = useSelector(state => state.oneLocation.location)
    console.log(location, "THIS IS LOCATION******")
    const allReviews = useSelector(state => state.reviews)
    const reviewArr = Object.values(allReviews);

    const [isLoaded, setisLoaded] = useState(false);
    const [errors, setErrors] = useState([])
    const [review, setReview] = useState('')
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)

    useEffect(() => {
        dispatch(getOneLocation(id))
            .then(() => dispatch(getUserReviews(sessionUser.id)))
            .then(() => setisLoaded(true))
    }
        , [])

    // console.log(reviewArr, "rev?")
    // // const locations = Object.values(allLocations)
    // // console.log(locations, '***** this is what i want')



    function deleteItem(e, locationId) {
        e.preventDefault();
        e.stopPropagation()
        // return dispatch(deleteUserLocations(locationId))
    }

    // // useEffect(()=>{
    // //     const validations = [];
    // //     if(address.length < 5) validations.push('Please enter an Address. Address must be longer than 5 characters.');
    // //     if(city.length < 0) validations.push('Please fill in the City of the requested Location Address.');
    // //     if(state.length === 0 || state.length > 2) validations.push('Please enter a State Abbreviation. Ex(NY) for New York');
    // //     if(country.length === 0) validations.push('Please enter a country. Ex(USA)');
    // //     if(listingDetails.length < 5) validations.push('Please Enter details on your location. Ex: Full 4 Bedroom 3 Bathroom Home')
    // //     if(price < 0 || price > 1000) validations.push('Price must be between 1-999 per night');
    // //     if(url.length < 0) validations.push('Please enter the URL for your image.');
    // //     setErrors(validations);
    // // }, [address,city,state,country,listingDetails,price,url])



    const handleSubmit = (e) => {
        e.stopPropagation();
        e.preventDefault();
        const locationId = id
        const userId = sessionUser.id
        const formValues = {
            userId,
            locationId,
            review,
            rating
        };
        dispatch(addNewReview(formValues, userId))
    }
    if (!isLoaded) {
        return null
    } else {
        return (
            <>
                <div>
                    <div key={`${location?.id}`} id="card-container">
                        <div className="house-cards">
                            <img
                                src={`${location?.Images[0]?.url}`}
                                className="house-listing-img"
                                alt="house for listing"
                            ></img>
                            <div className="house-details">
                                <h1 className='user-listings-header'>{`${location?.address} ${location?.city}, ${location?.state}`}</h1>
                                <h2>{`$${location?.price} night`}</h2>
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
                                                <span>{`Rating: ${review.rating}`}</span>
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
                        {/* <form
                            className='new-location-form'
                            onSubmit={handleSubmit}> */}
                        <h2>New Review</h2>
                        <ul className="errors">
                            {errors.map(error => (
                                <li key={error} id='form-error'>{error}</li>
                            ))}
                        </ul>
                        <div className="form-items">
                            <label>Have a Review? Enter it here
                                <div>
                                    <input
                                        type="Text"
                                        name="review"
                                        className='form-input-box'
                                        value={review}
                                        onChange={(e) => setReview(e.target.value)}
                                    ></input>
                                </div>
                            </label>
                            <label>Rating
                                <div className='rating-box'>
                                    <div>
                                        <div>
                                            {[...Array(5)].map((star, i) => {
                                                const ratingValue = i + 1;
                                                return (
                                                    <label>
                                                        <input type="radio" name='rating' value={ratingValue} onClick={(e) => setRating(ratingValue)} />
                                                        <FaStar
                                                            className="star"
                                                            color={ratingValue <= (hover || rating) ? "#ffc107" : "grey"}
                                                            size={30}
                                                            onMouseEnter={() => setHover(ratingValue)}
                                                            onMouseLeave={() => setHover(null)} />
                                                    </label>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </label>
                            <button
                                type="submit"
                                className='user-listings-delete-button'
                                onClick={(e) => handleSubmit(e)}
                                disabled={errors.length !== 0}
                            >Submit Review</button>
                        </div>
                        {/* </form> */}
                    </div>
                </div>
            </>
        )
    }



}

export default OneLocation
