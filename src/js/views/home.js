import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import landscape1 from "../assets/img/portfolio/project-landscape-1.jpg";

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
      <section id="scrollspyServices" className="py-5 py-xl-8 py-xxl-16">
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

        <div className="container overflow-hidden">
          <div className="row gy-5 gy-md-6 gx-md-4 gy-lg-0 gx-xxl-5">
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="badge wave-bg-yellow text-primary p-3 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="currentColor"
                  className="bi bi-pie-chart"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.5 1.018a7 7 0 0 0-4.79 11.566L7.5 7.793V1.018zm1 0V7.5h6.482A7.001 7.001 0 0 0 8.5 1.018zM14.982 8.5H8.207l-4.79 4.79A7 7 0 0 0 14.982 8.5zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" />
                </svg>
              </div>
              <h4 className="mb-3">Market Research</h4>
              <p className="mb-3 text-secondary">
                Vestibulum bibendum, lorem a blandit lacinia, nisi velit posuere
                nisl, vel placerat magna mauris mollis maximus est.
              </p>
              <a
                href="#!"
                className="fw-bold text-decoration-none link-primary"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-right-short"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                  />
                </svg>
              </a>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="badge wave-bg-green text-primary p-3 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="currentColor"
                  className="bi bi-aspect-ratio"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5v-9zM1.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z" />
                  <path d="M2 4.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H3v2.5a.5.5 0 0 1-1 0v-3zm12 7a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H13V8.5a.5.5 0 0 1 1 0v3z" />
                </svg>
              </div>
              <h4 className="mb-3">Web Design</h4>
              <p className="mb-3 text-secondary">
                Vestibulum bibendum, lorem a blandit lacinia, nisi velit posuere
                nisl, vel placerat magna mauris mollis maximus est.
              </p>
              <a
                href="#!"
                className="fw-bold text-decoration-none link-primary"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-right-short"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                  />
                </svg>
              </a>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="badge wave-bg-pink text-primary p-3 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="currentColor"
                  className="bi bi-airplane-engines"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0c-.787 0-1.292.592-1.572 1.151A4.347 4.347 0 0 0 6 3v3.691l-2 1V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.191l-1.17.585A1.5 1.5 0 0 0 0 10.618V12a.5.5 0 0 0 .582.493l1.631-.272.313.937a.5.5 0 0 0 .948 0l.405-1.214 2.21-.369.375 2.253-1.318 1.318A.5.5 0 0 0 5.5 16h5a.5.5 0 0 0 .354-.854l-1.318-1.318.375-2.253 2.21.369.405 1.214a.5.5 0 0 0 .948 0l.313-.937 1.63.272A.5.5 0 0 0 16 12v-1.382a1.5 1.5 0 0 0-.83-1.342L14 8.691V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.191l-2-1V3c0-.568-.14-1.271-.428-1.849C9.292.591 8.787 0 8 0ZM7 3c0-.432.11-.979.322-1.401C7.542 1.159 7.787 1 8 1c.213 0 .458.158.678.599C8.889 2.02 9 2.569 9 3v4a.5.5 0 0 0 .276.447l5.448 2.724a.5.5 0 0 1 .276.447v.792l-5.418-.903a.5.5 0 0 0-.575.41l-.5 3a.5.5 0 0 0 .14.437l.646.646H6.707l.647-.646a.5.5 0 0 0 .14-.436l-.5-3a.5.5 0 0 0-.576-.411L1 11.41v-.792a.5.5 0 0 1 .276-.447l5.448-2.724A.5.5 0 0 0 7 7V3Z" />
                </svg>
              </div>
              <h4 className="mb-3">SEO Services</h4>
              <p className="mb-3 text-secondary">
                Vestibulum bibendum, lorem a blandit lacinia, nisi velit posuere
                nisl, vel placerat magna mauris mollis maximus est.
              </p>
              <a
                href="#!"
                className="fw-bold text-decoration-none link-primary"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-right-short"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                  />
                </svg>
              </a>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="badge wave-bg-cyan text-primary p-3 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="currentColor"
                  className="bi bi-alarm"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
                  <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
                </svg>
              </div>
              <h4 className="mb-3">Content Marketing</h4>
              <p className="mb-3 text-secondary">
                Vestibulum bibendum, lorem a blandit lacinia, nisi velit posuere
                nisl, vel placerat magna mauris mollis maximus est.
              </p>
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
              <h2 className="display-3 fw-bolder mb-4">
                Meet our portfolio to <br></br>
                <mark className="wave-highlight wave-highlight-yellow">
                  <span className="wave-font-hw display-1 text-accent fw-normal">
                    kickstart
                  </span>
                </mark>{" "}
                your success.
              </h2>
            </div>
          </div>
        </div>

        <div className="container overflow-hidden">
          <div className="row gy-2 g-md-2 g-xl-3 bsb-project-2-grid">
            <div className="col-12 col-md-4 bsb-project-2-item">
              <figure className="rounded rounded-3 overflow-hidden bsb-hover-overlay m-0">
                <a href="#!">
                  <img
                    className="img-fluid bsb-scale-up bsb-hover-scale"
                    loading="lazy"
                    src={landscape1}
                    alt=""
                  ></img>
                </a>
                <figcaption>
                  <h3 className="text-white bsb-hover-fadeInLeft">
                    Canvas Lover
                  </h3>
                  <div className="text-white bsb-hover-fadeInRight">
                    Photography
                  </div>
                </figcaption>
              </figure>
            </div>

            <div className="col-12 col-md-4 bsb-project-2-item">
              <figure className="rounded rounded-3 overflow-hidden bsb-hover-overlay m-0">
                <a href="#!">
                  <img
                    className="img-fluid bsb-scale bsb-hover-scale-up"
                    loading="lazy"
                    src="./assets/img/portfolio/project-portrait-1.jpg"
                    alt=""
                  ></img>
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
                  <img
                    className="img-fluid bsb-scale-up bsb-hover-scale"
                    loading="lazy"
                    src="./assets/img/portfolio/project-landscape-2.jpg"
                    alt=""
                  ></img>
                </a>
                <figcaption>
                  <h3 className="text-white bsb-hover-fadeInLeft">
                    Jungle Book
                  </h3>
                  <div className="text-white bsb-hover-fadeInRight">
                    Adventure
                  </div>
                </figcaption>
              </figure>
            </div>

            <div className="col-12 col-md-4 bsb-project-2-item">
              <figure className="rounded rounded-3 overflow-hidden bsb-hover-overlay m-0">
                <a href="#!">
                  <img
                    className="img-fluid bsb-scale bsb-hover-scale-up"
                    loading="lazy"
                    src="./assets/img/portfolio/project-portrait-2.jpg"
                    alt=""
                  ></img>
                </a>
                <figcaption>
                  <h3 className="text-white bsb-hover-fadeInUp">Wavy Road</h3>
                  <div className="text-white bsb-hover-fadeInDown">
                    Adventure
                  </div>
                </figcaption>
              </figure>
            </div>

            <div className="col-12 col-md-4 bsb-project-2-item">
              <figure className="rounded rounded-3 overflow-hidden bsb-hover-overlay m-0">
                <a href="#!">
                  <img
                    className="img-fluid bsb-scale bsb-hover-scale-up"
                    loading="lazy"
                    src="./assets/img/portfolio/project-portrait-3.jpg"
                    alt=""
                  ></img>
                </a>
                <figcaption>
                  <h3 className="text-white bsb-hover-fadeInUp">
                    Golden Leaves
                  </h3>
                  <div className="text-white bsb-hover-fadeInDown">
                    Photography
                  </div>
                </figcaption>
              </figure>
            </div>

            <div className="col-12 col-md-4 bsb-project-2-item">
              <figure className="rounded rounded-3 overflow-hidden bsb-hover-overlay m-0">
                <a href="#!">
                  <img
                    className="img-fluid bsb-scale bsb-hover-scale-up"
                    loading="lazy"
                    src="./assets/img/portfolio/project-portrait-4.jpg"
                    alt=""
                  ></img>
                </a>
                <figcaption>
                  <h3 className="text-white bsb-hover-fadeInUp">
                    Minimal Notions
                  </h3>
                  <div className="text-white bsb-hover-fadeInDown">Design</div>
                </figcaption>
              </figure>
            </div>

            <div className="col-12 col-md-4 bsb-project-2-item">
              <figure className="rounded rounded-3 overflow-hidden bsb-hover-overlay m-0">
                <a href="#!">
                  <img
                    className="img-fluid bsb-scale-up bsb-hover-scale"
                    loading="lazy"
                    src="./assets/img/portfolio/project-landscape-3.jpg"
                    alt=""
                  ></img>
                </a>
                <figcaption>
                  <h3 className="text-white bsb-hover-fadeInLeft">
                    Bright Winks
                  </h3>
                  <div className="text-white bsb-hover-fadeInRight">Design</div>
                </figcaption>
              </figure>
            </div>

            <div className="col-12 col-md-4 bsb-project-2-item">
              <figure className="rounded rounded-3 overflow-hidden bsb-hover-overlay m-0">
                <a href="#!">
                  <img
                    className="img-fluid bsb-scale-up bsb-hover-scale"
                    loading="lazy"
                    src="./assets/img/portfolio/project-landscape-4.jpg"
                    alt=""
                  ></img>
                </a>
                <figcaption>
                  <h3 className="text-white bsb-hover-fadeInLeft">
                    Innovative Day
                  </h3>
                  <div className="text-white bsb-hover-fadeInRight">
                    Photography
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
);
