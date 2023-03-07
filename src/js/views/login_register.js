import React, { useContext, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {  useNavigate  } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";



export function LogReg(log) {
    const { store, actions } = useContext(Context)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [select, setSelect] = useState("")
    const [passwordShown, setPasswordShown] = useState(false);
    const [logInOut, setLogInOut] = useState("loggedOut")
    const [pwd, setPwd] = useState("")
    const [confirmPwd, setConfirmPwd] = useState("")

    const navigate = useNavigate()

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    const validatePassword = (e) => {


    }

    return (
        <>
        {logInOut == "loggedOut" ? <>
            
            <Button variant="danger" className="shopButton me-2 login" onClick={() => { setSelect("login"); handleShow() }}>Iniciar Sesión</Button>
            <Button variant="danger" className="shopButton me-2 register" onClick={() => { setSelect("register"); handleShow() }}>Regístrate</Button>

            {select == "login" ? <Modal show={show} onHide={handleClose}>
                <div className="container w-100 m-auto">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <img className="mb-4 img-fluid" src="https://i.imgur.com/Hewd1Jo.png" alt="J" style={{ height: '100px', aspectRatio: 1 / 1 }} />
                        <h3 className="h3 mb-3 fw-normal">Inicia sesión para realizar tus pedidos</h3>

                        <form className="w-75 justify-content-center align-items-center" onSubmit={(e) => {
                            if (actions.handleLogin(e)){
                                setShow(false);
                                setLogInOut("loggedIn")
                                navigate('/catalog');
                                //log=true;
                            } else {
                                alert('Regístrate para realizar tus pedidos');
                            }
                        }}>
                            <div className="form-floating w-100 my-1">
                                <input name="username" type="email" className="form-control" placeholder="name@example.com" />
                                <label htmlFor="floatingInput">Correo electrónico</label>
                            </div>
                            <div className="input-group d-flex align-items-baseline">
                                <div className="form-floating w-75 my-1">
                                    <input name="password" type={passwordShown ? "text" : "password"} className="form-control" id="floatingPassword" placeholder="Password" />
                                    <label htmlFor="floatingPassword">Contraseña</label>
                                </div>
                                <label className="w-25 link-danger btn fw-bold input-group-text" onClick={togglePassword}>OJO</label>
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

                    <form className="w-75 justify-content-center align-items-center" onSubmit={(e)=>{
                        if (actions.addUser(e)) {
                            setSelect("login")
                            setPwd("")
                            setConfirmPwd("")
                        } else {
                            alert('¡Ya existe una cuenta con esa dirección de correo! Inicia sesión para realizar tus pedidos')
                        }

                    }}>
                        <div className="form-floating w-100 my-1">
                            <input name="username" type="username" className="form-control" placeholder="name@example.com" required/>
                            <label htmlFor="floatingInput">Correo electrónico</label>
                        </div>
                        <div className="form-floating w-100 my-1">
                            <input name="password" type="password" onChange={(e)=> setPwd(e.target.value)} value={pwd} className="form-control" id="floatingPassword" placeholder="Contraseña" required/>
                            <label htmlFor="floatingPassword">Contraseña</label>
                        </div>
                        <div className="form-floating w-100 my-1">
                            <input name="confirmpassword" onChange={(e)=> setConfirmPwd(e.target.value)} value={confirmPwd} className="form-control" placeholder="Verificar Contraseña" required/>
                            <label>Verificar contraseña</label>
                        </div>
                        {pwd === confirmPwd ? <button className="shopButton" type="submit">Regístrate</button> : <button className="alert alert-danger" type="submit" disabled>Las contraseñas no coinciden</button>}
                    </form>

                    <div className="d-flex align-items-baseline">
                        <p>¿Ya tienes cuenta?</p>
                        <span className="link-danger btn fw-bold" onClick={() => { setSelect("login") }}>¡Inicia sesión!</span>
                    </div>

                    <p className="mt-5 mb-3 text-muted">© 2023 JUNKIE</p>

                </div>
            </div></Modal>}
            </> : <>
            <Link className="shopButton me-2" to={`/shop-cart`}><img src="https://i.imgur.com/Kvc0Yzc.png" alt="Bootstrap" width="25" height="20"></img></Link>
            <button className="shopButton me-2 logout" onClick={(e) => {
                if (actions.handleLogout(e)){
                    setLogInOut("loggedOut")
                    navigate('/');
                }
            }}>Cerrar sesión</button></>
            }

            
        </>
    )
}