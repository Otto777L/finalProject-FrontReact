import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import landscape1 from "../assets/img/portfolio/project-landscape-1.jpg";
import { Player } from '@lottiefiles/react-lottie-player';

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
            <button className="learn-more foodButton">
              <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
              </span>
              <span className="button-text">Pedir comida</span>
            </button>
            {/* <p className="fs-4 mb-5">Our methods are straight, comfortable, and established to ensure evolution and acceleration.</p> */}            
          </div>
        </div>
      </div>
    </section>

    {/* <!-- Main --> */}
    <main id="main">
      {/* <!-- Section - Services -->
    <!-- Service 3 - Bootstrap Brain Component --> */}
        <div className="container mb-5 mb-md-6 mb-xl-10">
          <div className="row justify-content-md-center">
            <div className="col-12 col-md-10 col-lg-9 col-xl-8 col-xxl-7 text-center">
              <h2 className="display-3 fw-bolder mb-4">
                You will get the perfect{" "}
                <mark className="wave-highlight wave-highlight-yellow">
                  <span className="wave-font-hw display-1 text-accent fw-normal">
                    resolutions
                  </span>
                </mark>{" "}
                with our proficient services.
              </h2>
            </div>
          </div>
        </div>

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
    <!-- Masonry 1 - Bootstrap Brain Component --> */}
      <section id="scrollspyPortfolio" className="py-5 py-xl-8 py-xxl-16">
        <div className="container mb-5 mb-md-6 mb-xl-10">
          <div className="row justify-content-md-center">
            <div className="col-12 col-md-10 col-lg-9 col-xl-8 col-xxl-7 text-center">
              <h2 className="display-3 fw-bolder mb-4">Meet our portfolio to <br></br><mark className="wave-highlight wave-highlight-yellow"><span className="wave-font-hw display-1 text-accent fw-normal">kickstart</span></mark> your success.</h2>
            </div>
          </div>
        </div>

        <div className="container overflow-hidden">
          <div className="row gy-2 g-md-2 g-xl-3 bsb-project-2-grid">
            <div className="col-12 col-md-4 bsb-project-2-item">
              <figure className="rounded rounded-3 overflow-hidden bsb-hover-overlay m-0">
                <a href="#!">
                  <img className="img-fluid bsb-scale-up bsb-hover-scale" loading="lazy" src={landscape1} alt=""></img>
                </a>
                <figcaption>
                  <h3 className="text-white bsb-hover-fadeInLeft">Canvas Lover</h3>
                  <div className="text-white bsb-hover-fadeInRight">Photography</div>
                </figcaption>
              </figure>
            </div>

            <div className="col-12 col-md-4 bsb-project-2-item">
              <figure className="rounded rounded-3 overflow-hidden bsb-hover-overlay m-0">
                <a href="#!">
                  <img className="img-fluid bsb-scale bsb-hover-scale-up" loading="lazy" src="./assets/img/portfolio/project-portrait-1.jpg" alt=""></img>
                </a>
                <figcaption>
                  <h3 className="text-white bsb-hover-fadeInUp">Red Lava</h3>
                  <div className="text-white bsb-hover-fadeInDown">Nature</div>
                </figcaption>
              </figure>
            </div>

            <div className="col-12 col-md-4 bsb-project-2-item">
              <figure className="rounded rounded-3 overflow-hidden bsb-hover-overlay m-0">
                <a href="#!">
                  <img className="img-fluid bsb-scale-up bsb-hover-scale" loading="lazy" src="./assets/img/portfolio/project-landscape-2.jpg" alt=""></img>
                </a>
                <figcaption>
                  <h3 className="text-white bsb-hover-fadeInLeft">Jungle Book</h3>
                  <div className="text-white bsb-hover-fadeInRight">Adventure</div>
                </figcaption>
              </figure>
            </div>

            <div className="col-12 col-md-4 bsb-project-2-item">
              <figure className="rounded rounded-3 overflow-hidden bsb-hover-overlay m-0">
                <a href="#!">
                  <img className="img-fluid bsb-scale bsb-hover-scale-up" loading="lazy" src="./assets/img/portfolio/project-portrait-2.jpg" alt=""></img>
                </a>
                <figcaption>
                  <h3 className="text-white bsb-hover-fadeInUp">Wavy Road</h3>
                  <div className="text-white bsb-hover-fadeInDown">Adventure</div>
                </figcaption>
              </figure>
            </div>

            <div className="col-12 col-md-4 bsb-project-2-item">
              <figure className="rounded rounded-3 overflow-hidden bsb-hover-overlay m-0">
                <a href="#!">
                  <img className="img-fluid bsb-scale bsb-hover-scale-up" loading="lazy" src="./assets/img/portfolio/project-portrait-3.jpg" alt=""></img>
                </a>
                <figcaption>
                  <h3 className="text-white bsb-hover-fadeInUp">Golden Leaves</h3>
                  <div className="text-white bsb-hover-fadeInDown">Photography</div>
                </figcaption>
              </figure>
            </div>

            <div className="col-12 col-md-4 bsb-project-2-item">
              <figure className="rounded rounded-3 overflow-hidden bsb-hover-overlay m-0">
                <a href="#!">
                  <img className="img-fluid bsb-scale bsb-hover-scale-up" loading="lazy" src="./assets/img/portfolio/project-portrait-4.jpg" alt=""></img>
                </a>
                <figcaption>
                  <h3 className="text-white bsb-hover-fadeInUp">Minimal Notions</h3>
                  <div className="text-white bsb-hover-fadeInDown">Design</div>
                </figcaption>
              </figure>
            </div>

            <div className="col-12 col-md-4 bsb-project-2-item">
              <figure className="rounded rounded-3 overflow-hidden bsb-hover-overlay m-0">
                <a href="#!">
                  <img className="img-fluid bsb-scale-up bsb-hover-scale" loading="lazy" src="./assets/img/portfolio/project-landscape-3.jpg" alt=""></img>
                </a>
                <figcaption>
                  <h3 className="text-white bsb-hover-fadeInLeft">Bright Winks</h3>
                  <div className="text-white bsb-hover-fadeInRight">Design</div>
                </figcaption>
              </figure>
            </div>

            <div className="col-12 col-md-4 bsb-project-2-item">
              <figure className="rounded rounded-3 overflow-hidden bsb-hover-overlay m-0">
                <a href="#!">
                  <img className="img-fluid bsb-scale-up bsb-hover-scale" loading="lazy" src="./assets/img/portfolio/project-landscape-4.jpg" alt=""></img>
                </a>
                <figcaption>
                  <h3 className="text-white bsb-hover-fadeInLeft">Innovative Day</h3>
                  <div className="text-white bsb-hover-fadeInRight">Photography</div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>


    </main>
  </div>
);
