import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import './Locations.css'
import {getLocations} from '../../store/locations'


function Locations({}){

const dispatch = useDispatch();

   useEffect(()=>{
       dispatch(getLocations())
   });

    return (
        <div id="locations-layout">
        <div className="house-cards" >
        <a href="/locations/1">
            <img src='https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-hero.jpg' id="house-listing-img"></img>
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
