import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import landscape1 from "../assets/img/portfolio/project-landscape-1.jpg";
import { Player } from '@lottiefiles/react-lottie-player';
import { Link } from "react-router-dom";

export const Home = () => (
  <div className="text-center">
    {/* <!-- Hero 2 - Bootstrap Brain Component --> Otto Jumbotron */}
    <section id="scrollspyHero" className="wave-bg-blue py-5 py-xl-8 py-xxl-10 jumbotron">
      <div className="container overflow-hidden">
        <div className="row align-items-center">
          <div className="">
            <h1 className="mb-3 text-light">
              La mejor opción de comida rápida del mercado
            </h1>
            <Link className="learn-more foodButton"  to="/catalog">            
              <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
              </span>
              <span className="button-text text-light">Pedir comida</span>
            </Link>
            {/* <p className="fs-4 mb-5">Our methods are straight, comfortable, and established to ensure evolution and acceleration.</p> */}            
          </div>
        </div>
      </div>
    </section>

    {/* <!-- Main --> */}
    <main id="main">    

      {/* <!-- Section - Services -->
    <!-- Service 3 - Bootstrap Brain Component --> */}
      <section className="container" >
        <div className="row row-cols-1 row-cols-md-3 g-4" style={{ minHeight: 400, }}>
          <div className="col">
            <div className="card h-100 border-0">
              <div>
                <Player
                  speed={1}
                  hover
                  src="https://assets5.lottiefiles.com/private_files/lf30_6yjihjym.json"
                  style={{ minHeight: "250px", aspectRatio: 1/1}}
                >
                </Player>
              </div>
              <div className="card-body">
                <h3 className="card-title fw-bold">Realiza tu pedido</h3>
                <p className="card-text">Escoge tu <strong>Junkie</strong> preferida, realiza tu pedido y recibe tu orden al instante</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 border-0">
            <div>
                <Player
                  speed={1}
                  hover
                  src="https://assets2.lottiefiles.com/packages/lf20_rocodyl6.json"
                  style={{ minHeight: "250px", aspectRatio: 1/1}}
                >
                </Player>
              </div>
              <div className="card-body">
                <h3 className="card-title fw-bold">Visítanos</h3>
                <p className="card-text">Nuestros <strong>Junkie Spots</strong> son tu lugar ideal</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 border-0">
            <div>
                <Player
                  speed={1}
                  hover
                  src="https://assets10.lottiefiles.com/packages/lf20_W3WeWDJ4wY.json"
                  style={{ minHeight: "250px", aspectRatio: 1/1}}
                >
                </Player>
              </div>
              <div className="card-body">
                <h3 className="card-title fw-bold">Nuestras Redes</h3>
                <p className="card-text">Comparte tu experiencia <strong>Junkie</strong> con todos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Section - Portfolio -->
    <!-- Img Landing Page Maria Paola Galvis--> */}
       <section id="about_1" className="about-section-padding_1">
        <div className="container">
          <div className="row">
              <div className="p-4 col-lg-7 col-md-12 col-12">
                <div className="about-img">
                  <img src="https://images.pexels.com/photos/1435903/pexels-photo-1435903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="img-fluid" style={{borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%"}}/>
                </div>
              </div>
              <div className=" p-5 col-lg-5 col-md-5 col-12 ps-lg-5 mt-md-5">
                <div className="about-text">
                  <h2><strong> Disfruta de una ¡Pizzetta Especial!</strong></h2>
                  <h4> ¿Has probado alguna de nuestras pizzettas? </h4>
                  <p> Si aún no lo has hecho, nuestra pizzetta Cucumber es una buena opción para degustar.
                      Es una delicia que espera sorprender tu paladar.
                  </p>
                  <p><strong>¡Te va a encantar!</strong></p>
                </div>
              </div>
          </div>
        </div>  
       </section>

       <section id="about_2" className="about-section-padding_2">
        <div className="container">
          <div className="row">
          <div className=" p-5 col-lg-5 col-md-5 col-12 ps-lg-5 mt-md-5">
                <div className="about-text">
                  <h2><strong> Conéctate con nosotros ¡Vive una experiencia de calidad! </strong></h2>
                  <p> Nuestras distintas propuestas esperan por ti, son ideales para darle un toque de sabor a los buenos momentos.
                    <strong> ¡Vive una experiencia única con propuestas y sorpresas magníficas!</strong>
                  </p>
                  <p><strong>¡Te lo mereces!</strong></p>
                  <button className="learn-more foodButton">
                    <span className="circle" aria-hidden="true">
                      <span className="icon arrow"></span>
                    </span>
                    <span className="button-text"> Más Info </span>
                  </button>
                </div>
              </div>
              <div className="p-4 col-lg-7 col-md-12 col-12">
                <div className="about-img">
                  <img src="https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1024,format=auto,quality=50/https://cdn.doordash.com/media/consumer/home/landing/new/all_in_one.jpg" alt="" className="img-fluid" style={{borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%"}}/>
                </div>
              </div>
          </div>
        </div>  
       </section>

       <section id="about_3" className="about-section-padding_3">
        <div className="container">
          <div className="row">
              <div className="p-4 col-lg-7 col-md-12 col-12">
                <div className="about-img">
                  <img src="https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="img-fluid" style={{borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%"}}/>
                </div>
              </div>
              <div className=" p-5 col-lg-5 col-md-5 col-12 ps-lg-5 mt-md-5">
                <div className="about-text">
                  <h2><strong> Disfruta de una ¡Pizzetta Especial!</strong></h2>
                  <h4> ¿Has probado alguna de nuestras pizzettas? </h4>
                  <p> Si aún no lo has hecho, nuestra pizzetta Cucumber es una buena opción para degustar.
                      Es una delicia que espera sorprender tu paladar.
                  </p>
                  <p><strong>¡Te va a encantar!</strong></p>
                </div>
              </div>
          </div>
        </div>  
       </section>

    </main>
  </div>
);
