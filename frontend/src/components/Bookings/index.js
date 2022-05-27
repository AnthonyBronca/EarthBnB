import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getAllBookings } from "../../store/bookings";
import Errors from "../Errors";

function Bookings() {
    const dispatch = useDispatch();
    const history = useHistory();
    const idParams = useParams()
    const userAuth = useSelector(state => state.session.user.id)
    const bookings = useSelector(state => state.bookings)
    console.log(bookings, "this is bookingsss")

    useEffect(()=> {
        dispatch(getAllBookings(userAuth))
    }, [dispatch])

    if (idParams.id != userAuth) {
        return (
            <Errors />
        )
    } else {
        return (
            <>
            <div>
                <h1 className='user-listings-header'>Your Listings</h1>
            </div>
            <div id="main-container">
                <div id="locations-layout">

                </div>
            </div>
        </>
        )
    }
}

export default Bookings
