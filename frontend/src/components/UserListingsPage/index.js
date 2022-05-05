import './index.css'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUserLocations } from '../../store/userLocations.js';
import { useHistory } from 'react-router-dom'
import { deleteUserLocations } from '../../store/userLocations.js';

function UserListingsPage() {

    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)
    const userLocations = useSelector(state => state.userLocations.Locations)
    const history = useHistory();

    useEffect(() => {
        if (sessionUser) {
            const userId = sessionUser.id
            dispatch(getUserLocations(userId));
        }
    });


    function editButton(e, locationId){
        e.preventDefault();
        history.push(`/locations/${locationId}/edit-form`)
    }

    function deleteItem(e, locationId) {
        e.preventDefault();
        return dispatch(deleteUserLocations(locationId))
    }

    return (
        <>
            <div>
                <h1 className='user-listings-header'>Your Listings</h1>
            </div>
            <div id="main-container">
                <div id="locations-layout">
                    {/* {userLocations?.map((location) => {
                        return (
                            <div key={`${location.id}`}id="card-container">
                                <div className="house-cards">
                                    <a href={`/locations/${location.id}`} id="a-locations-tag">
                                        <img
                                            src={`${location.Images[0].url}`}
                                            className="house-listing-img"
                                            alt="house for listing"
                                        ></img>
                                        <div className="house-details">
                                            <h3>{`${location.city}, ${location.state}`}</h3>
                                            <span>{`$${location.price} night`}</span>
                                        </div>
                                    </a>
                                    <div className='user-locations-buttons'>
                                        <button className='user-listings-edit-button' id={`edit-button-${location.id}`} onClick={(e) => {editButton(e, location.id)}} >Edit Listing</button>
                                        <button type="submit" className='user-listings-delete-button' id={`delete-button-${location.id}`}
                                            onClick={(e) => deleteItem(e, location.id)}>Delete Listing</button>
                                    </div>
                                </div>
                            </div>
                        );
                    })} */}
                </div>
            </div>

        </>
    )

}

export default UserListingsPage
