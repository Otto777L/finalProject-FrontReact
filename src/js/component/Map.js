import React from 'react'
import GoogleMapReact from 'google-map-react'
import "../../styles/map.css";
import { LocationPin } from './LocationPin';

export const Map = ({ location, zoomLevel }) => (
    <div className="map">  
    <h1>Selecciona tu dirección:</h1>
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  )