import React, { useEffect, useContext, useState, useRef } from 'react'
import GoogleMapReact from 'google-map-react'
import "../../styles/map.css";
import { LocationPin } from './LocationPin';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from "leaflet";
import { Context } from "../store/appContext";
import { createPopper } from '@popperjs/core';
import Overlay from 'react-bootstrap/Overlay';

export const Map = ({ location, zoomLevel, handleNextPrevClick }) => { 

  const {store, actions} = useContext(Context);
  const [show, setShow] = useState(false);
  const target = useRef(null);  
  const [localLocation, setLocalLocation] = useState("");
  const [customLoc, setCustomLoc] = useState("");

  const handleKeyDown = (event) => {    
      setLocalLocation(event.target.value);
      console.log(localLocation);    
  };

  const handleCustomLoc = (event) => {
    setCustomLoc(event.target.value);
  };

  return <div>
  <div className="d-flex text-center row justify-content-center">  
    <h1 className="m-3">Selecciona una de las opciones para tu dirección de entrega:</h1>
    <label className="inp w-50" htmlFor="inp">
      <input placeholder="" id="inp" type="text" onChange={handleCustomLoc} value={customLoc} onKeyDown={handleKeyDown}/>
      <span className="label ms-2">Indica tu dirección de entrega</span>
      <span className="focus-bg"></span>
    </label>
    <div className="d-flex flex-row justify-content-center">
      <h3 className="mt-3">¿Quieres usar tu dirección actual?</h3>
      <img src="https://cdn-icons-png.flaticon.com/512/9446/9446643.png" className="thumbnail-info ms-3" alt="..." ref={target} onClick={() => setShow(!show)}/>
    </div>
    <Overlay target={target.current} show={show} placement="right">{({
          placement: _placement,
          arrowProps: _arrowProps,
          show: _show,
          popper: _popper,
          hasDoneInitialMeasure: _hasDoneInitialMeasure,
          ...props
        }) => (
          <div
            {...props}
            style={{
              position: 'absolute',
              backgroundColor: '#eba83a',
              padding: '2px 10px',
              color: 'white',
              borderRadius: 3,
              marginLeft: '6px',
              ...props.style,
            }}
          >
            Haz click en el mapa para ver tu ubicación.
          </div>
        )}
      </Overlay>
    <button className="shopButton m-3 w-25" onClick={() => {setCustomLoc(""), setLocalLocation("Av. Andres Bello")}}>Si</button>
    <div className="leaflet-container">
      <MapContainer center={[10.495607466710284, -66.84886393485347]} zoom={120} scrollWheelZoom={false}>
        <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <LocationPin/>
      </MapContainer>
      {/* <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
          />
        </GoogleMapReact>
      </div> */}
    </div>
      <div className='d-flex flex-row justify-content-center'>
        <button className="shopButton mt-3 me-3" onClick={() => handleNextPrevClick(1)}>Anterior</button>
        <button className="shopButton mt-3" onClick={() => {
          if (localLocation != '') {
            handleNextPrevClick(3); 
            actions.addDeliveryLoc(localLocation);
            console.log(store.shoppingReceipt);
          } else {
            alert("Agrega una dirección");
          }
          }}>Siguiente</button>
      </div>
    </div>
    </div>
  }