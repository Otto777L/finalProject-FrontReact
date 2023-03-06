import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../../styles/card-catalog.css";

export const CardCatalog = ({item}) => {    
  
    return (
        <div className="card m-2" style={{width: '250px'}}>
        <img src={item.img} className="card-img-top product-img" alt="..."></img>
        <div className="card-body d-flex justify-content-between">
          <div className="">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.cost}</p>
          </div>
          <div className="">            
            <i class="fa-solid fa-plus"></i>
          </div>
        </div>
      </div>
    )  
};
/*InmobileCards.propTypes = {
    item: PropTypes.object,
    type: PropTypes.string
}*/