import React, { useState, useEffect, useContext } from "react";
import { Navbar } from "../component/navbar";
import "../../styles/catalog.css";
import { Context } from "../store/appContext";
import { Map } from "../component/Map";
import { CDBStepper, CDBStep, CDBInput, CDBBtn, CDBContainer } from "cdbreact";
import { ProductList } from "../component/product-list";
import { Checkout } from "../component/metodoPago";

export const ShopCart = () => {

  const [active, setActive] = useState(1);

    let location = {
      lat: 10.495607466710284,
      lng:  -66.84886393485347,
    }

    navigator.geolocation.getCurrentPosition(function(position) {
      location.lat = position.coords.latitude;
      location.lng = position.coords.longitude;
    });    

  const handleNextPrevClick = a => setActive(a);
  return (<>
      <CDBStepper steps={[3]}>
        <CDBStep
          id={1}
          icon="pencil-alt"
          name="Modifica tu pedido"
          handleClick={() => handleNextPrevClick(1)}
          active={active}
          component={<ProductList handleNextPrevClick={handleNextPrevClick} location={location} zoomLevel={17}/>}
        />
        <CDBStep
          id={2}
          icon="info-circle"
          name="Selecciona tu dirección de entrega"
          handleClick={() => handleNextPrevClick(2)}
          active={active}
          component={<Map handleNextPrevClick={handleNextPrevClick} location={location} zoomLevel={17}/>}
        />
        <CDBStep
          id={3}
          icon="book-reader"
          name="Selecciona tu metodo de pago"
          handleClick={() => handleNextPrevClick(3)}
          active={active}
          component={<Checkout handleNextPrevClick={handleNextPrevClick} zoomLevel={17} />}
        />
      </CDBStepper>
      <div className="row align-items-center">            
      
  </div>  
  </>
  );
}