import React, { useEffect } from "react";
import { useDispatch, useSelector, useState } from "react-redux";
import "./Locations.css";
import { getLocations } from "../../store/locations";

function Locations() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getLocations());
    }, []);
    const locations = useSelector((state) => {
        return state.locations.allLocations; //state.locations is an array. overwrite locations line 15
    });
    console.log(locations, "this is locations")
    // console.log(locations[0].Images[0].url, "this is our test******")

    return (
        <>
            <div id="main-container">
                <div id="locations-layout">
                    {locations.map((location) => {
                        return (
                            <div key={`${location.id}`} id="card-container">
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
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default Locations;
