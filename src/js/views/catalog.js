import React from "react";
import { Navbar } from "../component/navbar";
import "../../styles/catalog.css";

export const Catalog = () => (
  <div>
    <div className="container categories text-bg-secondary">
      <button className="foodButtonCat m-2">
        <img className="icon me-2" src="https://cdn-icons-png.flaticon.com/512/6978/6978281.png"></img>
        <span>Pizzas</span>
      </button>
      <button className="foodButtonCat m-2">
        <img className="icon me-2" src="https://cdn-icons-png.flaticon.com/512/1332/1332168.png"></img>
        <span>Hamburguesas</span>
      </button>
      <button className="foodButtonCat m-2">
        <img className="icon me-2" src="https://cdn-icons-png.flaticon.com/512/2738/2738730.png"></img>
        <span>Bebidas</span>
      </button>
      <button className="foodButtonCat m-2">
        <img className="icon me-2" src="https://cdn-icons-png.flaticon.com/512/3173/3173443.png"></img>
        <span>Postres</span>
      </button>
    </div>
  </div>
);
