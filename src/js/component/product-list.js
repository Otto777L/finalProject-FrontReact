import React, {useContext, useEffect} from "react";
import "../../styles/product-list.css";
import "../../styles/navbar.css";
import { Context } from "../store/appContext";

export const ProductList = ({handleNextPrevClick}) => {

  const {store, actions} = useContext(Context);

  useEffect(()=>{		
    // console.log(store.cart);
	},[]);

  return (
    <div className="container text-center">  
    <h1>Modifica tu pedido:</h1>
      {store.cart.map((product, index)=>{
        return <div key={product.id} className="container d-flex flex-row justify-content-between product-item mt-2 border border-3 p-3 align-items-center">
          <img src={product.images[0]} className="thumbnail" alt="..."/>
          <h4>{product.name}</h4>
          <h5>{product.default_price_data.unit_amount/100*product.quantity}$</h5>
          <div className="d-flex flex-row">
            <div className="shopButton" onClick={() => actions.subFromCart(product)}>
              <i className="fa-solid fa-minus"></i>
            </div>
            <h3 className="ms-2 me-2">{product.quantity}</h3>
            <div className="shopButton" onClick={() => actions.addToCart(product)}>
              <i className="fa-solid fa-plus"></i>
            </div>
          </div>
        </div>
      })}
      {store.cart.length > 0 && <button className="shopButton mt-3" onClick={() => handleNextPrevClick(2)}>Siguiente</button>}      
      
    </div>)
  }