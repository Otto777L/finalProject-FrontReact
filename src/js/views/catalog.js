import React, {useState,useEffect, useContext} from "react";
import { Navbar } from "../component/navbar";
import "../../styles/catalog.css";
import { CardCatalog } from "../component/CardCatalog";
import { Context } from "../store/appContext";

export const Catalog = () => {

  //const [foods, setFoods] = useState([]);
  const {store, actions} = useContext(Context);

  /*const getFoods = () => {// agregar la info desde el store cuando se tenga cableado, esta funcion llena el objeto foods que se recorre mas abajo
		/*fetch("https://swapi.dev/api/planets/")
		.then((response)=> {
			return response.json()
		}).then((responseJSON)=> {
			setFoods(responseJSON.results);
		})*/
    //setFoods([{id:1, name: "Pizza", cost: 12, img: "https://static.tnn.in/photo/msid-95377151,imgsize-491555,width-100,height-200,resizemode-75/95377151.jpg"}]);
    //Evaluar como calcular la distancia para el tiempo de entrega con la api de ubicacion
	//}
  useEffect(()=>{		
    //getFoods();
	},[]);

  const pizzaArray = store.foods.filter(food => food.type == "Pizza");
  const burguerArray = store.foods.filter(food => food.type == "Hamburguesas");
  const drinksArray = store.foods.filter(food => food.type == "Bebidas");
  const dessertArray = store.foods.filter(food => food.type == "Postres");

  return (<div>
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
    <div>
      <h1>Pizzas</h1>
      <div className="d-flex flex-row flex-nowrap overflow-auto">
      {pizzaArray.map((food, index)=>{
        return <CardCatalog key={food.id} item={food}/>
      })}
    </div>
    <div>
      <h1>Hamburguesas</h1>
      {burguerArray.map((food, index)=>{
        return <CardCatalog key={food.id} item={food}/>
      })}
    </div>
    <div>
      <h1>Bebidas</h1>
      {drinksArray.map((food, index)=>{
        return <CardCatalog key={food.id} item={food}/>
      })}
    </div>
    <div>
      <h1>Postres</h1>
      {dessertArray.map((food, index)=>{
        return <CardCatalog key={food.id} item={food}/>
      })}
    </div>
		</div>
  </div>)
};
