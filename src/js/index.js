//import react into the bundle
import React from 'react'
import {createRoot} from 'react-dom/client'

//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import Layout from './layout.js'

//
const root = createRoot(document.querySelector("#app"))

if ( !navigator.geolocation ) {
    alert(' Tu navegador no tiene opción de localización ');
    throw new Error('Tu navegador no tiene opción de localización');
}

//render your react application
root.render(<Layout/>)

