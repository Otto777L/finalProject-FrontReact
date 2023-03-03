import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export function LogReg() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [select, setSelect] = useState("")
    const [passwordShown, setPasswordShown] = useState(false);


    const [userList, setUserList] = useState([])


    const users = [
        {
            username: 'dadiazr.07@gmail.com',
            password: 'admin1@1',
        },
        {
            username: 'admin2@gmail.com',
            password: 'admin2@2',
        },
    ];


    const handleSubmit = (e) => {
        console.log(users)
        e.preventDefault();

        const toCompare = {
            username: e.target.elements.username.value,
            password: e.target.elements.password.value,
        };

        if (users.some((u) => JSON.stringify(u) === JSON.stringify(toCompare))) {
            console.log('User exists in array');
        } else {
            console.log('User does not exist in array');
        }
    };


    const togglePassword = () => {
        setPasswordShown(!passwordShown);
      };


    return (
        <>
            <Button variant="danger" className="shopButton me-2 login" onClick={() => { setSelect("login"); handleShow() }}>Iniciar Sesión</Button>
            <Button variant="danger" className="shopButton me-2 register" onClick={() => { setSelect("register"); handleShow() }}>Regístrate</Button>

            {select == "login" ? <Modal show={show} onHide={handleClose}>
                <div className="container w-100 m-auto">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <img className="mb-4 img-fluid" src="https://i.imgur.com/Hewd1Jo.png" alt="J" style={{ height: '100px', aspectRatio: 1 / 1 }} />
                        <h3 className="h3 mb-3 fw-normal">Inicia sesión para realizar tus pedidos</h3>

                        <form className="w-100" onSubmit={handleSubmit}>
                            <div className="form-floating w-100 my-1">
                                <input name="username" type="email" className="form-control" placeholder="name@example.com" />
                                <label htmlFor="floatingInput">Correo electrónico</label>
                            </div>
                            <div className="d-flex align-items-baseline">
                                <div className="form-floating w-75 my-1">
                                    <input name="password" type={passwordShown ? "text" : "password"} className="form-control" id="floatingPassword" placeholder="Password" />
                                    <label className="w-75" htmlFor="floatingPassword">Contraseña</label>
                                </div>
                                <label className="w-25 link-danger btn fw-bold" onClick={togglePassword}>OJO</label>
                            </div>
                            <button className="shopButton" type="submit">Iniciar sesión</button>
                        </form>

                        <div className="d-flex align-items-baseline">
                            <p>¿No tienes cuenta?</p>
                            <span className="link-danger btn fw-bold" onClick={() => { setSelect("register") }}>¡Regístrate!</span>
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
                        <span className="link-danger btn fw-bold" onClick={() => { setSelect("login") }}>¡Inicia sesión!</span>
                    </div>

                    <p className="mt-5 mb-3 text-muted">© 2023 JUNKIE</p>

                </div>
            </div></Modal>}




        </>
    )
}