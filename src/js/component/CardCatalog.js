import React, {useContext} from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../../styles/card-catalog.css";
import { Context } from "../store/appContext";

export const CardCatalog = ({key, item}) => {   
  
  const {store, actions} = useContext(Context);
  
    return (
        <div className="card m-2" style={{width: '250px', padding:'0px'}}>
        <img src={item.images[0]} className="card-img-top product-img" alt="..."></img>
        <div className="card-body d-flex justify-content-between">
          <div className="">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.default_price}</p>
          </div>
          <div className="">
            <i className="fa-solid fa-plus" onClick={() => actions.getCart(
                {
                  key: key,
                  name: item.name, 
                  cost: item.cost, 
                  img: item.img,
                  qta: 0}
              )}></i>
          </div>
        </div>
      </div>
    )  
};