import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getAllBookings } from "../../store/bookings";

function Bookings () {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useParams()
    const stateBookings = useSelector((state) => state.bookings);
    const itemsObj = stateBookings.bookingAndLocations
    // const bookings = stateBookings.bookings
    // const bookingsArr = Object.values(bookings)
    // const images = stateBookings.bookings.images
    // console.log('what is this ', bookingsArr)
    // console.log(itemsObj, "@#%@#%@#%")


    // // we are currently working on query for bookings. I have location/bookings in an obj, but I cant get images at the same time
    // // may have to just render the names of those

    // useEffect(()=>{
    //     dispatch(getAllBookings(user.id))
    // }, [dispatch])


    return (
        <>
            {/* <div>
                <h1 className='user-listings-header'>Your Bookings</h1>
            </div>
            <div id="main-container">
                <div id="locations-layout">
                 {stateBookings? itemsObj.bookingItems.map((booking) => {
                        return (
                            <div key={`${booking.id}`}id="card-container">
                                <div className="house-cards">
                                    <a href={`/locations/${booking.id}`} id="a-locations-tag">
                                        <img
                                            // src={`${booking?.Images[0]?.url}`}
                                            className="house-listing-img"
                                            alt="house for listing"
                                        ></img>
                                        <div className="house-details">
                                            <h3>{`${booking.city}, ${booking.state}`}</h3>
                                            <span>{`$${booking.price} night`}</span>
                                            <span>{`${booking.Bookings[0]?.startDate}`}</span>
                                        </div>
                                    </a>
                                    <div className='user-locations-buttons'>
                                        <button className='user-listings-edit-button' id={`edit-button-${booking.id}`} onClick={(e) => {}} >Edit Booking</button>
                                        <button type="submit" className='user-listings-delete-button' id={`delete-button-${booking.id}`}
                                            onClick={(e) => {}}>Delete Booking</button>
                                    </div>
                                </div>
                            </div>
                        );
                    }): <h2>Loading</h2>}
                 </div>
             </div> */}
         </>

        )
}

export default Bookings
