import React, { useEffect } from 'react'
import GoogleMapReact from 'google-map-react'
import "../../styles/map.css";
import { LocationPin } from './LocationPin';

export const Map = ({ location, zoomLevel, handleNextPrevClick }) => {  

  return <div className="container text-center mapDim d-flex row justify-content-center">
  <div className="map">  
    <h1>Indica tu dirección:</h1>
    <div className="d-flex justify-content-center">
      <div className="google-map">
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
      </div>
    </div>
      <div className='d-flex flex-row justify-content-center'>
        <button className="shopButton mt-3 me-3" onClick={() => handleNextPrevClick(1)}>Anterior</button>
        <button className="shopButton mt-3" onClick={() => handleNextPrevClick(3)}>Siguiente</button>
      </div>
    </div>
    </div>
  }