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
    {store.cart.length > 0 ?  <h1 className="m-3">Modifica tu pedido:</h1> : <h1 className="m-3">¡Agrega un producto a tu carrito!</h1>}     
    <div className="d-flex flex-column align-items-center">
      {store.cart.map((product, index)=>{
        return <div key={product.id} className="d-flex flex-row justify-content-between product-item mt-2 border border-3 p-2 align-items-center">
          <div className="d-flex justify-content-between align-items-center col-7">
          <img src={product.images[0]} className="thumbnail" alt="..."/>
          <h4>{product.name}</h4>
          <h5>{product.default_price_data.unit_amount/100*product.quantity}$</h5>
          </div>
          <div className="d-flex justify-content-around col-5">
            <div className="d-flex">
              <div className="shopButton" onClick={() => actions.subFromCart(product)}>
                <i className="fa-solid fa-minus"></i>
              </div>
              <h3 className="ms-2 me-2 align-self-center">{product.quantity}</h3>
              <div className="shopButton" onClick={() => actions.addToCart(product)}>
                <i className="fa-solid fa-plus"></i>
              </div>
            </div>
            <div className="d-flex">
              <div className="shopButton ms-5" onClick={() => actions.deleteFromCart(index)}>
                <i className="fa-solid fa-trash"></i>
              </div>            
            </div>
          </div>
        </div>
      })}
    </div>
      {store.cart.length > 0 && <button className="shopButton mt-3" onClick={() => handleNextPrevClick(2)}>Siguiente</button>}      
      
    </div>)
  }