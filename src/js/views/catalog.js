import React, {useState,useEffect, useContext} from "react";
import { Navbar } from "../component/navbar";
import "../../styles/catalog.css";
import { CardCatalog } from "../component/CardCatalog";
import { Context } from "../store/appContext";
import { SectionProducts } from "../component/product-section";

export const Catalog = () => {

  //const [foods, setFoods] = useState([]);
  const {store, actions} = useContext(Context);
  const [categorySelected, setCategorySelected] = useState("All");
  const [auxArrayProduct, setAuxArrayProduct] = useState([]);

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
    actions.getFoods()
    }, []);

  const pizzaArray = store.foods.filter(food => food.type == "Pizza");
  const burguerArray = store.foods.filter(food => food.type == "Hamburguesas");
  const drinksArray = store.foods.filter(food => food.type == "Bebidas");
  const dessertArray = store.foods.filter(food => food.type == "Postres");

  return (<div>
    <div className="container-fluid categories">
      <button className="foodButtonCat m-2" onClick={() => {setCategorySelected("All")}}>
        <img className="icon me-2" src="https://cdn-icons-png.flaticon.com/512/6978/6978281.png"></img>
        <span>Todo</span>
      </button>
      <button className="foodButtonCat m-2" onClick={() => {setCategorySelected("Pizzas"); setAuxArrayProduct(pizzaArray)}}>
        <img className="icon me-2" src="https://cdn-icons-png.flaticon.com/512/6978/6978281.png"></img>
        <span>Pizzas</span>
      </button>
      <button className="foodButtonCat m-2" onClick={() => {setCategorySelected("Hamburguesas"); setAuxArrayProduct(burguerArray)}}>
        <img className="icon me-2" src="https://cdn-icons-png.flaticon.com/512/1332/1332168.png"></img>
        <span>Hamburguesas</span>
      </button>
      <button className="foodButtonCat m-2" onClick={() => {setCategorySelected("Bebidas"); setAuxArrayProduct(drinksArray)}}>
        <img className="icon me-2" src="https://cdn-icons-png.flaticon.com/512/2738/2738730.png"></img>
        <span>Bebidas</span>
      </button>
      <button className="foodButtonCat m-2" onClick={() => {setCategorySelected("Postres"); setAuxArrayProduct(dessertArray)}}>
        <img className="icon me-2" src="https://cdn-icons-png.flaticon.com/512/3173/3173443.png"></img>
        <span>Postres</span>
      </button>
    </div>
    {categorySelected == "All" ?
      <div>        
        <div>
          <SectionProducts category="Pizzas" productArray={pizzaArray}></SectionProducts>
        </div>   
        <div>
          <SectionProducts category="Hamburguesas" productArray={burguerArray}></SectionProducts>
        </div>   
        <div>
          <SectionProducts category="Bebidas" productArray={drinksArray}></SectionProducts>
        </div>   
        <div>
          <SectionProducts category="Postres" productArray={dessertArray}></SectionProducts>
        </div>
      </div>
    : 
    <div>
      <SectionProducts category={categorySelected} productArray={auxArrayProduct}></SectionProducts>
    </div>
    } 
		</div>)
};
