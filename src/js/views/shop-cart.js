import React, {useState,useEffect, useContext} from "react";
import { Navbar } from "../component/navbar";
import "../../styles/catalog.css";
import { Context } from "../store/appContext";
import { Map } from "../component/Map";
import { CDBStepper, CDBStep, CDBInput, CDBBtn, CDBContainer } from "cdbreact";
import { ProductList } from "../component/product-list";

export const ShopCart = () => { 

    const [active, setActive] = useState(1);

    const location = {
        address: '1600 Amphitheatre Parkway, Mountain View, california.',
        lat: 37.42216,
        lng: -122.08427,
    }    

  const handleNextPrevClick = a => setActive(a);
  return (<>
      <CDBStepper>
        <CDBStep
          id={1}
          icon="pencil-alt"
          name="Modifica tu pedido"
          handleClick={() => handleNextPrevClick(1)}
          active={active}
          component={<ProductList location={location} zoomLevel={17}/>}
        />
        <CDBStep
          id={2}
          icon="info-circle"
          name="Selecciona tu dirección de entrega"
          handleClick={() => handleNextPrevClick(2)}
          active={active}
          component={<Map location={location} zoomLevel={17}/>}
        />
        <CDBStep
          id={3}
          icon="book-reader"
          name="Selecciona tu metodo de pago"
          handleClick={() => handleNextPrevClick(3)}
          active={active}
          component={<Map location={location} zoomLevel={17}/>}
        />
        <CDBStep
          id={4}
          icon="check"
          name="Resumen de compra"
          handleClick={() => handleNextPrevClick(4)}
          active={active}
          component={<Map location={location} zoomLevel={17}/>}
        />
      </CDBStepper>
      <div className="row align-items-center">            
      
  </div>  
  </>
  );
}