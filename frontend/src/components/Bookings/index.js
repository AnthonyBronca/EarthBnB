import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getAllBookings } from "../../store/bookings";

function Bookings () {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useParams()

    return (
        <>
        <h1>test</h1>
        </>
        )
}

export default Bookings
