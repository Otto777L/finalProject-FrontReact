import React, { useState, useEffect, useContext } from "react";
import ReactDOM from 'react-dom';
import { Context } from "../store/appContext";
import { loadStripe } from '@stripe/stripe-js';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51Mj0qaDYy6AFzbjNe1iUedNDXTIvnmSlb994Zn0EeeYQFachKIIoC6vhNGaVgzQCodh6KzwKo2fQgDgV44tlCtYc00Tou4u7v7');




export function Checkout() {
    const { store, actions } = useContext(Context)

    useEffect(()=>{		
      actions.prepareItemstoCheckout(stripePromise)
      }, []);

    return (
    <button role="link" onClick={(e) => {actions.checkOutStripe(store.cartAPI, stripePromise)}}>
      Checkout
    </button>
  );
}
