import React, { Component } from "react";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<div className="row mx-0">
			<div className="col-6 col-md-6 mb-3">
				<h5>Conócenos</h5>
				<ul className="nav flex-column">
					<li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
					<li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Quiénes somos</a></li>
					<li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Tarjetas de regalo</a></li>
					<li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Promociones</a></li>
				</ul>
			</div>

			<div className="col-md-5 offset-md-1 mb-3">
				<form>
					<h5>Suscríbete a nuestro newsletter</h5>
					<p>Recibe las mejores ofertas y cupones cada mes.</p>
					<div className="d-flex flex-column flex-sm-row w-100 gap-2">
						<label htmlFor="newsletter1" className="visually-hidden">Correo electrónico</label>
						<input id="newsletter1" type="text" className="form-control" placeholder="Correo electrónico"/>
							<button className="btn btn-danger" type="button">Suscríbete</button>
					</div>
				</form>
			</div>
		</div>

		<div className="d-flex flex-column flex-sm-row justify-content-center pt-4 mt-4 border-top">
			<p>© 2023 <strong>JUNKIE</strong> Derechos reservados.</p>
		</div>
	</footer>
);
