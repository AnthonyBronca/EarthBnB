import React from "react";
import './Locations.css'
import house1 from '/Users/anthonybronca/Desktop/w14-solo/frontend/src/images/house1.jpg'

function Locations({}){

    return (
        <div id="locations-layout">
        <div className="house-cards" >
        <a href="/locations/1">
            <image src={house1}></image>
            <div className="house-details">
            <h2>City,State</h2>
            <span>$$$ Night</span>
            </div>
        </a>
        </div>
        </div>
    );
}

export default Locations
