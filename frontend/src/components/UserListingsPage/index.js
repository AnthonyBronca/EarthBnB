import './index.js'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUserLocations } from '../../store/userLocations.js';

function UserListingsPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)
    const userLocations = useSelector(state => state.userLocations.Locations)

    useEffect(() => {
        if (sessionUser) {
            const userId = sessionUser.id
            dispatch(getUserLocations(userId));
        }
    }, []);

    return (
        <>
            <div>
                <h1 className='user-listings-header'>Your Listings</h1>
            </div>
            <div id="main-container">
                <div id="locations-layout">
                    {userLocations?.map((location) => {
                        return (
                            <div id="card-container">
                                <div className="house-cards">
                                    <a href={`/locations/${location.id}`} id="a-locations-tag">
                                        <img
                                            src={`${location.Images[0].url}`}
                                            className="house-listing-img"
                                            alt="house for listing"
                                        ></img>
                                        <div className="house-details">
                                            <h3>{`${location.city}, ${location.state}`}</h3>
                                            <span>{`$${location.price}.00/night`}</span>
                                        </div>
                                    </a>
                                    <div className='user-locations-buttons'>
                                        <button>Edit Listing</button>
                                        <button>Delete Listing</button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

        </>
    )

}

export default UserListingsPage
