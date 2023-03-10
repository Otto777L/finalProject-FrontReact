import React, { useEffect, useState, useContext } from "react";
import { Player } from '@lottiefiles/react-lottie-player';
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const SuccessPage = () => {
    const { store, actions } = useContext(Context)
    const [show, setShow] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            setShow(false);
        }, 5000);
        console.log(store.shoppingReceipt)
    }, []);

    return (
        <>
            {show ? <div className="coantainer w-100" style={{ height: '100%' }}>

                <Player
                    speed={0.75}
                    autoplay
                    loop
                    src="https://assets2.lottiefiles.com/temp/lf20_PRvG5R.json"
                    style={{ height: "400px", aspectRatio: 1 / 1 }}
                >
                </Player>
            </div> : navigate('/catalog') //aqui ponemos el codigo esa page
            }
        </>
    )

}