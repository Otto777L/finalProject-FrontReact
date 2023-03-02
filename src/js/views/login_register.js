import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export function LogReg() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [select, setSelect] = useState("")


    return (
        <>
            <Button variant="danger" className="shopButton me-2 login" onClick={() => { setSelect("login"); handleShow() }}>Iniciar Sesión</Button>
            <Button variant="danger" className="shopButton me-2 register" onClick={() => { setSelect("register"); handleShow() }}>Regístrate</Button>

            {select == "login" ? <Modal show={show} onHide={handleClose}>
                <div className="container w-100 m-auto">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <img className="mb-4 img-fluid" src="https://i.imgur.com/Hewd1Jo.png" alt="J" style={{ height: '100px', aspectRatio: 1 / 1 }} />
                        <h3 className="h3 mb-3 fw-normal">Inicia sesión para realizar tus pedidos</h3>

                        <div className="form-floating w-75 my-1">
                            <input type="email" className="form-control" placeholder="name@example.com" />
                            <label htmlFor="floatingInput">Correo electrónico</label>
                        </div>
                        <div className="form-floating w-75 my-1">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                            <label htmlFor="floatingPassword">Contraseña</label>
                        </div>
                        <button className="shopButton">Iniciar sesión</button>
                        <div className="d-flex align-items-baseline">
                            <p>¿No tienes cuenta?</p>
                            <span class="link-danger btn fw-bold" onClick={() => { setSelect("register") }}>¡Regístrate!</span>
                        </div>


                        <p className="mt-5 mb-3 text-muted">© 2023 JUNKIE</p>

                    </div>
                </div>
            </Modal> : <Modal show={show} onHide={handleClose}><div className="container w-100 m-auto">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <img className="mb-4 img-fluid" src="https://i.imgur.com/Hewd1Jo.png" alt="J" style={{ height: '100px', aspectRatio: 1 / 1 }} />
                    <h3 className="h3 mb-3 fw-normal">Regístrate para realizar tus pedidos</h3>

                    <div className="form-floating w-75 my-1">
                        <input type="email" className="form-control" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Correo electrónico</label>
                    </div>
                    <div className="form-floating w-75 my-1">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Contraseña" />
                        <label htmlFor="floatingPassword">Contraseña</label>
                    </div>
                    <div className="form-floating w-75 my-1">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Verificar Contraseña" />
                        <label htmlFor="floatingPassword">Verificar contraseña</label>
                    </div>
                    <button className="shopButton">Regístrate</button>
                    <div className="d-flex align-items-baseline">
                        <p>¿Ya tienes cuenta?</p>
                        <span class="link-danger btn fw-bold" onClick={() => { setSelect("login") }}>¡Inicia sesión!</span>
                    </div>

                    <p className="mt-5 mb-3 text-muted">© 2023 JUNKIE</p>

                </div>
            </div></Modal>}




        </>
    )
}





















{/* <div className="container w-100 m-auto">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <img className="mb-4 img-fluid" src="https://i.imgur.com/Hewd1Jo.png" alt="J" style={{ height: '100px', aspectRatio: 1 / 1 }} />
                    <h3 className="h3 mb-3 fw-normal">Regístrate para realizar tus pedidos</h3>

                    <div className="w-75 form-floating my-1">
                        <input type="nombre" className="form-control" placeholder="Nombre" />
                        <label htmlFor="floatingInput">Nombre</label>
                    </div>
                    <div className="w-75 form-floating my-1">
                        <input type="apellido" className="form-control" placeholder="Apellido" />
                        <label htmlFor="floatingInput">Apellido</label>
                    </div>

                    <div class="d-md-flex justify-content-start align-items-center mb-1 py-2">
                        <h6 class="mb-0 me-4">Género: </h6>
                        <div class="form-check form-check-inline mb-0 me-4">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                                value="option1" />
                            <label class="form-check-label" for="femaleGender">Mujer</label>
                        </div>
                        <div class="form-check form-check-inline mb-0 me-4">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                                value="option2" />
                            <label class="form-check-label" for="maleGender">Hombre</label>
                        </div>
                        <div class="form-check form-check-inline mb-0">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                                value="option3" />
                            <label class="form-check-label" for="otherGender">Otro</label>
                        </div>
                    </div>
                    <div className="w-75 form-floating my-1">
                        <input type="tel" className="form-control" placeholder="Teléfono" />
                        <label htmlFor="floatingInput">Teléfono</label>
                    </div>
                    <div className="w-75 form-floating my-1">
                        <input type="dirección" className="form-control" placeholder="Dirección" />
                        <label htmlFor="floatingInput">Dirección</label>
                    </div>
                    <button className="shopButton">Regístrate</button>

                    <p className="mt-5 mb-3 text-muted">© 2023 JUNKIE</p>
                </div>
            </div> */}