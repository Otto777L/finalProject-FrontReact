import React from "react";



export const LogReg = () => (
    <main className="container w-50 m-auto">
        <form>
            <img className="mb-4" src="https://i.imgur.com/Hewd1Jo.png" alt="J" style={{ maxHeight: '100px'}}/>
                <h1 className="h3 mb-3 fw-normal">Inicia sesión aquí</h1>

                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                        <label for="floatingInput">Correo electrónico</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                        <label for="floatingPassword">Contraseña</label>
                </div>

                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me"/> Recuérdame
                    </label>
                </div>
                <button className="w-100 btn btn-lg btn-danger" type="submit">Inicia sesión</button>
                <p className="mt-5 mb-3 text-muted">© 2023 JUNKIE</p>
        </form>
    </main>
)