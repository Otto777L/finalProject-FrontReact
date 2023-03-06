import React, {useState,useEffect, useContext} from "react";
import { Navbar } from "../component/navbar";
import "../../styles/catalog.css";
import { Context } from "../store/appContext";
import { Map } from "../component/Map";

export const ShopCart = () => { 

    const location = {
        address: '1600 Amphitheatre Parkway, Mountain View, california.',
        lat: 37.42216,
        lng: -122.08427,
    }

    return (<div className="container">
        <div className="row align-items-center">
            <h1>Selecciona tu dirección:</h1>
            <Map location={location} zoomLevel={17}/>
        </div>
    </div>)
}