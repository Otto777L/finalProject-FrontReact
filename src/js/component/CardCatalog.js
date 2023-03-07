import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const CardCatalog = ({item}) => {    
  const { store, actions } = useContext(Context)
  
  
    return (
        <div className="card m-2" style={{width: '250px'}}>
        <img src={item.images[0]} className="card-img-top" alt="..."></img>
        <div className="card-body d-flex justify-content-between">
          <div className="">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.default_price}</p>
          </div>
          <div className="">            
            <i class="fa-solid fa-plus" onClick={(e) =>{actions.addFoodtoCart(item.id); }}></i>
          </div>
        </div>
      </div>
    )  
};
/*InmobileCards.propTypes = {
    item: PropTypes.object,
    type: PropTypes.string
}*/