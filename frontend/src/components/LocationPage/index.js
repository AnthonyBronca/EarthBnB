import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Locations.css";
import { getLocations } from "../../store/locations";

function Locations() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getLocations());
    }, []);

    const locations = useSelector((state) => {
        return state.locations; //state.locations is an array. overwrite locations line 15
    });

    // let imagesArray = [];

    // const locationArray = locations.map(location => location)
    // locationArray.forEach(location => {
    //     imagesArray.push(location.Images[0].url);
    // })

    return (
        <>
            <div id="main-container">
                <div id="locations-layout">
                    {locations.map((location) => {
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
