import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import { LogReg } from "../views/login_register";
import { MetodoPago } from "./metodoPago";

export const Navbar = () => {

  const [isLogged, setIsLogged] = useState(false);

  const handleLogin = () => {
    setIsLogged(!isLogged);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link to={`/`}>
          <img src="https://i.imgur.com/Hewd1Jo.png" alt="Bootstrap" width="35" height="50" />
        </Link>
        {/* <a className="navbar-brand" href="#"></a> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active fw-bold topText" aria-current="page" href="#">Pedidos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold topText" href="#">Entrega</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle fw-bold topText" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dirección
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Dir 1</a></li>
                <li><a className="dropdown-item" href="#">Dir 2</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#"> Dir Predeterminada</a></li>
              </ul>
            </li>
          </ul>
        < LogReg log={isLogged}/>        
        {/* <button className="shopButton"  onClick={handleLogin}>Registrarse</button> */}      
    </div>
  </div>
</nav>
	);
};
