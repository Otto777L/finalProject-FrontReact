import React, {useState} from 'react';
import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/map-marker';
import { useMapEvents } from 'react-leaflet/hooks';
import { Marker, Popup } from 'react-leaflet';

export  function LocationPin() {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
      click() {
        map.locate()
      },
      locationfound(e) {
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
      },
    })
  
    return position === null ? null : (
      <Marker position={position}>
        <Popup>Estás aquí.</Popup>
      </Marker>
    )
  }