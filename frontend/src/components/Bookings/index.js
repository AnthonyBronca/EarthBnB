import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getAllBookings } from "../../store/bookings";

function Bookings () {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useParams()
    const bookings = useSelector((state) => state.bookings.Bookings);
    console.log(bookings, "this is bookings");

    useEffect(()=>{
        dispatch(getAllBookings(user.id))
    }, [dispatch])




    return (
        <div>
            <h1>Your Bookings</h1>
            {bookings? bookings.map(booking => {
                return (<h2>{`${booking.id}`}</h2>
            )}): <h2>Please Wait...</h2>}
        </div>
    )
}

export default Bookings
