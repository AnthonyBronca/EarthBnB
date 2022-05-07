import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Locations.css";
import { getLocations } from "../../store/locations";

function Locations() {
    const dispatch = useDispatch();
    const locationsObj = useSelector((state) => state.locations);
    const locations = Object.values(locationsObj)
    // console.log(locations, '*****')
    const [isLoaded, setisLoaded] = useState(false);

    useEffect(() => {
        dispatch(getLocations()).then(setisLoaded(true));
    }, [dispatch]);
    // console.log(locations, "this is locations")
    // console.log(locations[0].Images[0].url, "this is our test******")

    if (!isLoaded) {
        return null
    } else {
        return (
            <>
                <div id="main-container">
                    <div id="locations-layout">
                        {locations ? locations.map((location) => {
                            return (
                                <div key={`${location.id}`} id="card-container">
                                    <div className="house-cards">
                                        <a href={`/locations/${location.id}`} id="a-locations-tag">
                                            <img
                                                src={`${location?.Images[0]?.url}`}
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
                        }) : <h2>Loading</h2>}
                    </div>
                </div>
            </>
        )
    }
}

export default Locations;
