import React from "react";
import { Link } from "react-router-dom";

const Socias = () => {
  return (
    <>
      <section className="section breadcrumb-area overlay-dark d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb-content d-flex flex-column align-items-center text-center">
                <h2 className="text-white text-uppercase mb-3">
                  Comparte el orgullo de ser mujer cacaotera
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section team-area ptb_100">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="single-team">
                <div className="team-photo">
                  <Link to="#">
                    <img src="/assets/img/team/mukahu_1.jpg" alt="" />
                  </Link>
                </div>
                <div className="team-content p-3">
                  <Link to="#">
                    <h3 className="mb-2">Nombre Y apellido</h3>
                  </Link>
                  <h5 className="text-uppercase">
                    Cacaocultivadora/ technica/ etc.
                  </h5>
                  <br />
                  <p>
                    Corta historia de la persona ... Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Laborum obcaecati dignissimos
                    quae quo ad iste ipsum officiis deleniti asperiores sit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="single-team">
                <div className="team-photo">
                  <Link to="#">
                    <img src="/assets/img/team/thumb_2.jpg" alt="" />
                  </Link>
                </div>
                <div className="team-content p-3">
                  <Link to="#">
                    <h3 className="mb-2">Yasmin Akter</h3>
                  </Link>
                  <h5 className="text-uppercase">SEO Expert</h5>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="single-team">
                <div className="team-photo">
                  <Link to="#">
                    <img src="/assets/img/team/thumb_3.jpg" alt="" />
                  </Link>
                </div>
                <div className="team-content p-3">
                  <Link to="#">
                    <h3 className="mb-2">Md. Arham</h3>
                  </Link>
                  <h5 className="text-uppercase">Media Controller</h5>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="single-team">
                <div className="team-photo">
                  <Link to="#">
                    <img src="/assets/img/team/thumb_4.jpg" alt="" />
                  </Link>
                </div>
                <div className="team-content p-3">
                  <Link to="#">
                    <h3 className="mb-2">Jassica William</h3>
                  </Link>
                  <h5 className="text-uppercase">Data Analyst</h5>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="single-team">
                <div className="team-photo">
                  <Link to="#">
                    <img src="/assets/img/team/thumb_5.jpg" alt="" />
                  </Link>
                </div>
                <div className="team-content p-3">
                  <Link to="#">
                    <h3 className="mb-2">John Doe</h3>
                  </Link>
                  <h5 className="text-uppercase">Web Developer</h5>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="single-team">
                <div className="team-photo">
                  <Link to="#">
                    <img src="/assets/img/team/thumb_6.jpg" alt="" />
                  </Link>
                </div>
                <div className="team-content p-3">
                  <Link to="#">
                    <h3 className="mb-2">Sara Scotch</h3>
                  </Link>
                  <h5 className="text-uppercase">Graphic Designer</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-area bg-overlay ptb_100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <div className="section-heading text-center m-0">
                <h2 className="text-white">
                  Conviértete en aliado de nuestro trabajo
                </h2>
                <p className="text-white d-none d-sm-block mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Laborum obcaecati dignissimos quae quo ad iste ipsum officiis
                  deleniti asperiores sit.
                </p>
                <p className="text-white d-block d-sm-none mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Laborum obcaecati.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Socias;
