import './index.css'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { getUserLocations } from '../../store/userLocations.js';
import { useHistory } from 'react-router-dom'
import { getUserLocations, deleteUserLocations, updateLocation } from '../../store/userLocations'
import { getLocations } from '../../store/locations';
import NotSignedIn from '../../components/NotSignedIn/index'

function UserListingsPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user)
    const allLocations = useSelector(state => state.userLocations)
    const locations = Object.values(allLocations)
    const [isLoaded, setIsLoaded] = useState(false)


    useEffect(() => {
        if (sessionUser) {
            const userId = sessionUser.id
            dispatch(getUserLocations(userId))
                .then(() => setIsLoaded(true))
        }
    }, [dispatch]) //maybe delete alllocations from here


    function editButton(e, locationId) {
        e.preventDefault();
        e.stopPropagation();
        history.push(`/locations/${locationId}/edit-form`)
    }

    function deleteItem(e, locationId) {
        setIsLoaded(false)
        e.preventDefault();
        e.stopPropagation()
        dispatch(deleteUserLocations(locationId))
            .then(() => dispatch(getUserLocations(sessionUser.id)))
            .then(() => dispatch(getLocations()))
            .then(() => setIsLoaded(true))
    }

    if (!isLoaded) {
        return  <NotSignedIn />
    } else {
        return (
            <>
                <div>
                    <h1 className='user-listings-header'>Your Listings</h1>
                </div>
                <div id="main-container">
                    <div id="locations-layout">
                        {locations ? locations.map((location) => {
                            return (
                                <div key={`${location.id}`} id="card-container">
                                    <div className="house-cards">
                                        <a href={`/locations/${location.id}`} id="a-locations-tag">
                                            <img
                                                src={`${location?.Images[0]?.url}`}
                                                className="house-listing-img"
                                                alt="house for listing"
                                            ></img>
                                            <div className="house-details">
                                                <h3>{`${location.city}, ${location.state}`}</h3>
                                                <span>{`$${location.price} night`}</span>
                                            </div>
                                        </a>
                                        <div className='user-locations-buttons'>
                                            <button className='user-listings-edit-button' id={`edit-button-${location.id}`} onClick={(e) => { editButton(e, location.id) }} >Edit Listing</button>
                                            <button type="submit" className='user-listings-delete-button' id={`delete-button-${location.id}`}
                                                onClick={(e) => (deleteItem(e, location.id))}>Delete Listing</button>
                                        </div>
                                    </div>
                                </div>
                            );
                        }) : <h2>Loading</h2>}
                    </div>
                </div>
            </>
        )
    }
}

export default UserListingsPage
