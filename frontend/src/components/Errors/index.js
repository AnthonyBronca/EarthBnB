import React from "react";
import { NavLink } from "react-router-dom";
import './index.css'

function Errors () {

    return (
        <div className="error-box">
            <h1>Oops! It looks like you hit a 404 error! Why not click link below to get where you need to go?</h1>
            <img id='error-img' src="https://a0.muscache.com/airbnb/static/error_pages/404-Airbnb_final-d652ff855b1335dd3eedc3baa8dc8b69.gif"></img>
            <div>
            <NavLink id="error-link" to={'/locations'}>Home Page</NavLink>
            </div>
        </div>
    )
}

export default Errors;
