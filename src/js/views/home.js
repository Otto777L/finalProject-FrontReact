import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import landscape1 from "../assets/img/portfolio/project-landscape-1.jpg";
import { Player } from '@lottiefiles/react-lottie-player';

export const Home = () => (
  <div className="text-center mt-5">

    {/* <!-- Hero 2 - Bootstrap Brain Component --> */}
    <section id="scrollspyHero" className="wave-bg-blue py-5 py-xl-8 py-xxl-10">
      <div className="container overflow-hidden jumbotron">
        <div className="row gy-5 gy-lg-0 align-items-lg-center justify-content-lg-between">
          <div className="col-12 col-lg-6 order-1 order-lg-0">
            <h1 className="display-3 fw-bolder mb-3">We provide easy <br></br><mark className="wave-highlight wave-highlight-blue"><span className="wave-font-hw display-2 text-accent fw-normal">solutions</span></mark> for startups at affordable rates.</h1>
            <p className="fs-4 mb-5">Our methods are straight, comfortable, and established to ensure evolution and acceleration.</p>
            <div className="d-grid gap-2 d-sm-flex">
              <button type="button" className="btn btn-primary btn-2xl rounded-pill px-4 gap-3">Free Consultation</button>
              <button type="button" className="btn btn-outline-primaryx btn-outline-accent btn-2xl rounded-pill px-4">Buy Credits</button>
            </div>
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
       <section id="about" class="about-section-padding">
        <div class="container">
          <div class="row">
              <div class="p-4 col-lg-7 col-md-12 col-12">
                <div class="about-img">
                  <img src="https://images.pexels.com/photos/1435903/pexels-photo-1435903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" class="img-fluid"/>
                </div>
              </div>
              <div class=" p-5 col-lg-5 col-md-5 col-12 ps-lg-5 mt-md-5">
                <div class="about-text">
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

       <section id="about" class="about-section-padding">
        <div class="container">
          <div class="row">
          <div class=" p-5 col-lg-5 col-md-5 col-12 ps-lg-5 mt-md-5">
                <div class="about-text">
                  <h2><strong> Conéctate con nosotros ¡Vive una experiencia de calidad! </strong></h2>
                  <p> Nuestras distintas propuestas esperan por ti, son ideales para darle un toque de sabor a los buenos momentos.
                    <strong> ¡Vive una experiencia única con propuestas y sorpresas magníficas!</strong>
                  </p>
                  <p><strong>¡Te lo mereces!</strong></p>
                  <a href="#" class="btn btn-danger"> Más info </a>
                </div>
              </div>
              <div class="p-4 col-lg-7 col-md-12 col-12">
                <div class="about-img">
                  <img src="https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1024,format=auto,quality=50/https://cdn.doordash.com/media/consumer/home/landing/new/all_in_one.jpg" alt="" class="img-fluid"/>
                </div>
              </div>
          </div>
        </div>  
       </section>
    </main>
  </div>
);
