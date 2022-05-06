import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getAllBookings } from "../../store/bookings";

function Bookings () {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useParams()
    const stateBookings = useSelector((state) => state.bookings);

    const bookings = stateBookings.bookings
    const bookingsArr = Object.values(bookings)
    const images = stateBookings.bookings.images
    console.log('what is this ', bookingsArr)


    // we are currently working on query for bookings. I have location/bookings in an obj, but I cant get images at the same time
    // may have to just render the names of those

    useEffect(()=>{
        dispatch(getAllBookings(user.id))
    }, [dispatch])


    return (
            <>
                <div>
                    <h1 className='user-listings-header'>Your Bookings</h1>
                </div>
                <div id="main-container">
                    <div id="locations-layout">
                    {/* {stateBookings? bookings.map(booking => {
                        return (
                            <h2>booking.city</h2>
                        )
                    }): <h2>Loading...</h2>} */}


                     {/* {bookings.map((location, i) => {
                            return (
                                <div key={`${location.id}`}id="card-container">
                                    <div className="house-cards">
                                        <a href={`/locations/${location.id}`} id="a-locations-tag">
                                            <img
                                                // src={`${location?.Images[0]?.url}`}
                                                className="house-listing-img"
                                                alt="house for listing"
                                            ></img>
                                            <div className="house-details">
                                                <h3>{`${location.city}, ${location.state}`}</h3>
                                                <span>{`$${location.price} night`}</span>
                                            </div>
                                        </a>
                                        <div className='user-locations-buttons'>
                                            <button className='user-listings-edit-button' id={`edit-button-${location.id}`} onClick >Edit Booking</button>
                                            <button type="submit" className='user-listings-delete-button' id={`delete-button-${location.id}`}
                                                onClick>Delete Booking</button>
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

export default Bookings
