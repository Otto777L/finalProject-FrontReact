import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const PerfilUsuario = () => {
    const { store, actions } = useContext(Context)
    return (
        <>
            <ul className="list-group list-group-flush list-unstyled p-0 mb-0 bg-light">
            {store.foodsUser.map((food) => {
                return <li key={food.id}>{food.name}</li>
            })}
            </ul>
        </>
    )
}