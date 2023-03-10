import React, {useContext} from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../../styles/card-catalog.css";
import { Context } from "../store/appContext";

export const CardCatalog = ({item}) => {   
  
  const {store, actions} = useContext(Context);
  
    return (
        <div className="card m-2" style={{width: '250px', padding:'0px'}}>
        <img src={item.images[0]} className="card-img-top product-img" alt="..."></img>
        <div className="card-body d-flex justify-content-between">
          <div className="">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.default_price_data.unit_amount/100}$</p>
          </div>
          <div className="">
          <button className="add-button" onClick={() => actions.addToCart(item)}>
            <span className="shadow"></span>
            <span className="edge"></span>
            <span className="front text"> +
            </span>
          </button>
            {/* <i className="fa-solid fa-plus" onClick={() => actions.addToCart(item)}></i> */}
          </div>
        </div>
      </div>
    )  
};