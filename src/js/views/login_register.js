import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export function LogReg() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
    <>
        <Button variant="danger" className="shopButton me-2" onClick={handleShow}>Iniciar Sesión</Button>

        <Modal show={show} onHide={handleClose}>
        <div className="container w-100 m-auto">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <img className="mb-4 img-fluid" src="https://i.imgur.com/Hewd1Jo.png" alt="J" style={{ height: '100px' , aspectRatio: 1/1}} />
                    <h3 className="h3 mb-3 fw-normal">Inicia sesión para realizar tus pedidos</h3>

                    <div className="form-floating w-75 my-1">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Correo electrónico</label>
                    </div>
                    <div className="form-floating w-75 my-1">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Contraseña</label>
                    </div>
                    <button className="shopButton">Iniciar sesión</button>

                    <p className="mt-5 mb-3 text-muted">© 2023 JUNKIE</p>

                </div>
            </div>
        </Modal>
    </>
    )
}