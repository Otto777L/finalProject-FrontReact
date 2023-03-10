import React, { useEffect, useContext } from 'react'
import GoogleMapReact from 'google-map-react'
import "../../styles/map.css";
import { LocationPin } from './LocationPin';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from "leaflet";
import { Context } from "../store/appContext";

export const Map = ({ location, zoomLevel, handleNextPrevClick }) => { 

  const {store, actions} = useContext(Context);

  const skater = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [250, 250]
  });

  return <div className="container text-center mapDim d-flex row justify-content-center">
  <div className="map">  
    <h1>Indica tu dirección:</h1>
    <div className="leaflet-container d-flex justify-content-center">
      <MapContainer center={[10.495607466710284, -66.84886393485347]} zoom={120} scrollWheelZoom={false}>
        <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {store.features.map(park => (
        <Marker
          key={park.properties.PARK_ID}
          position={[
            park.geometry.coordinates[1],
            park.geometry.coordinates[0]
          ]}
          onClick={() => {
            setActivePark(park);
          }}
          icon={skater}
        />
        ))}
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
        <button className="shopButton mt-3" onClick={() => handleNextPrevClick(3)}>Siguiente</button>
      </div>
    </div>
    </div>
  }