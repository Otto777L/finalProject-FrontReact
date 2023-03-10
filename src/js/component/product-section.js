import React, {useContext} from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../../styles/card-catalog.css";
import { Context } from "../store/appContext";
import { CardCatalog } from "../component/CardCatalog";

export const SectionProducts = (props) => {   
  
  const {store, actions} = useContext(Context);
  
    return (<div>
        <h1 className="text-center">{props.category}</h1>
        <div className="d-flex row justify-content-center">
        {props.productArray.map((food, index)=>{
          return <CardCatalog key={food.id} item={food}/>
        })}
        </div>
    </div>
    )  
};