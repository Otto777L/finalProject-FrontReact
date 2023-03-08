import React, {useContext, useEffect} from "react";
import "../../styles/product-list.css";
import "../../styles/navbar.css";
import { Context } from "../store/appContext";

export const ProductList = ({handleNextPrevClick}) => {

  const {store, actions} = useContext(Context);

  useEffect(()=>{		
    console.log(store.cart);
	},[]);

  return (
    <div className="container text-center">  
    <h1>Modifica tu pedido:</h1>
      {store.cart.map((product, index)=>{
        return <div key={product.id} className="container d-flex flex-row justify-content-between product-item mt-2">
          <img src={product.images[0]} className="thumbnail" alt="..."/>
          <h4>{product.name}</h4>
          <div className="d-flex flex-row">
            <div className="shopButton">
              <i className="fa-solid fa-minus" ></i>
            </div>
            <h3 className="me-2">{product.qta}</h3>
            <div className="shopButton">
              <i className="fa-solid fa-plus" ></i>
            </div>
          </div>
        </div>
      })}
      {store.cart.length > 0 && <button className="shopButton mt-3" onClick={() => handleNextPrevClick(2)}>Siguiente</button>}      
      
    </div>)
  }