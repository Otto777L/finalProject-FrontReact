import React from "react";



export const LogReg = () => (
    <main className="container w-50 m-auto">
        <div className="container justify-content-center">
            <img className="mb-4" src="https://i.imgur.com/Hewd1Jo.png" alt="J" style={{ maxHeight: '100px' }} />
            <h1 className="h3 mb-3 fw-normal">Inicia sesión para realizar tus pedidos</h1>

            <div className="form-floating my-1">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">Correo electrónico</label>
            </div>
            <div className="form-floating my-1">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Contraseña</label>
            </div>
            <button className="learn-more foodButton" type="submit">
                <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                </span>
                <span className="button-text">Inicia sesión</span>
                </button>
            <p className="mt-5 mb-3 text-muted">© 2023 JUNKIE</p>

        </div>
    </main>
)