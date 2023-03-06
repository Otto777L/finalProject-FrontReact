import React, {useState,useEffect, useContext} from "react";
import { Navbar } from "../component/navbar";
import "../../styles/catalog.css";
import { Context } from "../store/appContext";

export const ShopCart = () => { 
    return (<div className="container">
        <div className="row align-items-center">
            <h1>Selecciona tu dirección</h1>
        </div>
    </div>)
}