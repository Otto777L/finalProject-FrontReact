import React, {useContext, useEffect} from "react";
import "../../styles/product-list.css";
import { Context } from "../store/appContext";

export const ProductList = () => {

  const {store, actions} = useContext(Context);

  useEffect(()=>{		
    console.log(store.cart);
	},[]);

  return (
    <div className="container text-center">  
    <h1>Modifica tu pedido:</h1>
      {store.cart.map((product, index)=>{
        return <>
          <div className="container d-flex flex-row justify-content-between product-item mt-2">
            <img src={product.img} className="thumbnail" alt="..."/>
            <h4>{product.name}</h4>
            <div className="d-flex flex-row">
              <i className="fa-solid fa-minus me-2" ></i>
              <h3 className="me-2">{product.qta}</h3>
              <i className="fa-solid fa-plus" ></i>
            </div>
          </div>
        </>
      })}
    </div>)
  }