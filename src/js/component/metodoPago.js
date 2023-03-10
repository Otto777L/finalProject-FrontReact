import React, { useState, useEffect, useContext } from "react";
import ReactDOM from 'react-dom';
import { Context } from "../store/appContext";
import { Player } from '@lottiefiles/react-lottie-player';
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import { loadStripe } from '@stripe/stripe-js';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51Mj0qaDYy6AFzbjNe1iUedNDXTIvnmSlb994Zn0EeeYQFachKIIoC6vhNGaVgzQCodh6KzwKo2fQgDgV44tlCtYc00Tou4u7v7');




export function Checkout({handleNextPrevClick}) {
  const { store, actions } = useContext(Context)
  const navigate = useNavigate();

  useEffect(() => {
    actions.prepareItemstoCheckout(stripePromise);    
  }, []);

  return (
    <div>
      <h2 className="text-center m-3">Haz click para acceder a Stripe, Inc.</h2>
      <div className="container d-flex justify-content-center aling-items-center" style={{ height: '400px', width: '500px', borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%", backgroundColor: '#FFF8D9' }}>

        <div className="btn" role="link" onClick={(e) => {
          Swal.fire({
            title: '¿Seguro?',
            text: "Será redirigido a la plataforma de pagos de Stripe, Inc.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#ec4924',
            cancelButtonColor: '#BB371A',
            confirmButtonText: '¡Sí, pagar!'
          }).then((result) => {
            if (!result.isConfirmed) {
              Swal.fire({
                title: '¡Cancelado!',
                text: 'Su pedido ha sido cancelado',
                showConfirmButton: false,
              })
              navigate('/pagocancelado')
            } else {
              actions.checkOutStripe(store.cartAPI, stripePromise)
            }
          })

        }}>
          <Player
            speed={0.75}
            hover
            loop
            src="https://assets4.lottiefiles.com/packages/lf20_b3df6yqy.json"
            style={{ height: "400px", aspectRatio: 1 / 1 }}
          >
          </Player>
        </div>        
      </div>
      <div className="d-flex justify-content-center">
        <button className="shopButton mt-3 me-3" onClick={() => handleNextPrevClick(2)}>Anterior</button>
      </div>            
    </div>

  );
}
