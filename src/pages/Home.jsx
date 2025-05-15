import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section
        id="home"
        className="section welcome-area bg-overlay overflow-hidden d-flex align-items-center"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-7">
              <div className="welcome-intro text-right">
                <h1 className="text-white">
                  Mukahu: Mujeres que Siembran Futuro
                </h1>
                <p className="text-white my-4">
                  Cada grano de nuestro cacao cuenta una historia: la de madres,
                  hijas, líderes y trabajadoras que se han unido para crear un
                  cambio real en sus comunidades. Nuestro cacao no solo es fino
                  y aromático, es testimonio de resiliencia, de sabiduría
                  ancestral y de sueños compartidos.
                </p>
                <div className="button-group">
                  <Link to="#" className="btn btn-bordered-white">
                    Únete al cambio
                  </Link>
                  <Link
                    to="#"
                    className="btn btn-bordered-white d-none d-sm-inline-block"
                  >
                    Compra cacao con propósito
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-5">
              <div className="welcome-thumb-wrapper mt-5 mt-md-0">
                <span className="welcome-thumb-1">
                  <img
                    className="welcome-animation d-block ml-auto"
                    src="assets/img/welcome/thumb_1.png"
                    alt=""
                  />
                </span>
                <span className="welcome-thumb-2">
                  <img
                    className="welcome-animation d-block"
                    src="assets/img/welcome/thumb_2.png"
                    alt=""
                    style={{ width: "131px", height: "300px" }}
                  />
                </span>

                <span className="welcome-thumb-4">
                  <img
                    className="welcome-animation d-block"
                    src="assets/img/welcome/thumb_4.png"
                    alt=""
                  />
                </span>
                <span className="welcome-thumb-5">
                  <img
                    className="welcome-animation d-block"
                    src="assets/img/welcome/thumb_5.png"
                    alt=""
                    style={{ width: "150px", height: "95px" }}
                  />
                </span>
                <span className="welcome-thumb-6">
                  <img
                    className="welcome-animation d-block"
                    src="assets/img/welcome/thumb_6.png"
                    alt=""
                    style={{ width: "100px", height: "100px" }}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="shape shape-bottom">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
            fill="#FFFFFF"
          >
            <path
              className="shape-fill"
              d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
        c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
        c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
            />
          </svg>
        </div>
      </section>

      <section id="service" className="section service-area ptb_150">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="single-service service-gallery m-0 overflow-hidden">
                <div className="service-thumb">
                  <Link to="#">
                    <img
                      src="assets/img/case_studies/case_studies_1/thumb_1.jpg"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="service-content bg-white">
                  <Link to="#">
                    <h3>Historia</h3>
                  </Link>
                  <p className="py-3">
                    Lorem ipsum dolor sit amet, consectet ur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="single-service service-gallery m-0 overflow-hidden">
                <div className="service-thumb">
                  <Link to="#">
                    <img
                      src="assets/img/case_studies/case_studies_1/thumb_2.jpg"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="service-content bg-white">
                  <Link to="#">
                    <h3>Vision</h3>
                  </Link>
                  <p className="py-3">
                    Lorem ipsum dolor sit amet, consectet ur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="single-service service-gallery m-0 overflow-hidden">
                <div className="service-thumb">
                  <Link to="#">
                    <img
                      src="assets/img/case_studies/case_studies_1/thumb_3.jpg"
                      alt=""
                      width="1200px"
                      height="900px"
                    />
                  </Link>
                </div>
                <div className="service-content bg-white">
                  <Link to="#">
                    <h3>Mission</h3>
                  </Link>
                  <p className="py-3">
                    Lorem ipsum dolor sit amet, consectet ur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="service" className="section service-area bg-grey ptb_150">
        <div className="shape shape-top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
            fill="#FFFFFF"
          >
            <path
              className="shape-fill"
              d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
            c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
            c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
            />
          </svg>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-7">
              <div className="section-heading text-center">
                <h2>Crecemos juntas</h2>
                <p className="d-none d-sm-block mt-4">
                  Al formar parte de esta asociación, nuestras socias no solo
                  mejoran su economía familiar; también fortalecen su voz, su
                  autonomía y el futuro de sus hijos. Con técnicas sostenibles y
                  respeto profundo por la naturaleza, cultivamos un cacao de
                  alta calidad que ha sido reconocido dentro y fuera del país.
                </p>
                <p className="d-block d-sm-none mt-4">
                  Al formar parte de esta asociación, nuestras socias no solo
                  mejoran su economía familiar; también fortalecen su voz, su
                  autonomía y el futuro de sus hijos. Con técnicas sostenibles y
                  respeto profundo por la naturaleza, cultivamos un cacao de
                  alta calidad que ha sido reconocido dentro y fuera del país.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="single-service p-4">
                <span className="flaticon-rocket-launch color-1 icon-bg-1"></span>
                <h3 className="my-3">Talleres</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed
                  do eiusmod tempor incididunt emit.
                </p>
                <Link className="service-btn mt-3" to="#">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="single-service p-4">
                <span className="flaticon-monitoring color-2 icon-bg-2"></span>
                <h3 className="my-3">Acreditaciones</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed
                  do eiusmod tempor incididunt emit.
                </p>
                <Link className="service-btn mt-3" to="#">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="single-service p-4">
                <span className="flaticon-web color-3 icon-bg-3"></span>
                <h3 className="my-3">Apoyo tecnico</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed
                  do eiusmod tempor incididunt emit.
                </p>
                <Link className="service-btn mt-3" to="#">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="single-service p-4">
                <span className="flaticon-smartphone color-4 icon-bg-4"></span>
                <h3 className="my-3">Redes sociales</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed
                  do eiusmod tempor incididunt emit.
                </p>
                <Link className="service-btn mt-3" to="#">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="single-service p-4">
                <span className="flaticon-email color-5 icon-bg-5"></span>
                <h3 className="my-3">Asesoría</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed
                  do eiusmod tempor incididunt emit.
                </p>
                <Link className="service-btn mt-3" to="#">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="single-service p-4">
                <span className="flaticon-affiliate color-6 icon-bg-6"></span>
                <h3 className="my-3">Promocion</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed
                  do eiusmod tempor incididunt emit.
                </p>
                <Link className="service-btn mt-3" to="#">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="shape shape-bottom">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
            fill="#FFFFFF"
          >
            <path
              className="shape-fill"
              d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
        c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
        c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
            />
          </svg>
        </div>
      </section>

      <section className="section case-studies ptb_100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-7">
              <div className="section-heading text-center">
                <h2>casos de éxito</h2>
                <p className="d-none d-sm-block mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Laborum obcaecati dignissimos quae quo ad iste ipsum officiis
                  deleniti asperiores sit.
                </p>
                <p className="d-block d-sm-none mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Laborum obcaecati.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="single-case-studies">
                <Link to="#">
                  <img
                    src="assets/img/case_studies/case_studies_2/thumb_1.jpg"
                    alt=""
                  />
                </Link>
                <Link
                  to="assets/img/case_studies/case_studies_2/thumb_1.jpg"
                  data-fancybox="images"
                  className="case-studies-overlay"
                >
                  <span className="overlay-text text-center p-3">
                    <i className="fas fa-search-plus fa-2x text-white"></i>
                    <h3 className="text-white mt-2 mb-3">caso de exito #3</h3>
                    <p className="text-white">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Soluta, eligendi pariatur corporis libero distinctio,
                      corrupti.
                    </p>
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="single-case-studies">
                <Link to="#">
                  <img
                    src="assets/img/case_studies/case_studies_2/thumb_2.jpg"
                    alt=""
                  />
                </Link>
                <Link
                  to="assets/img/case_studies/case_studies_2/thumb_2.jpg"
                  data-fancybox="images"
                  className="case-studies-overlay"
                >
                  <span className="overlay-text text-center p-3">
                    <i className="fas fa-search-plus fa-2x text-white"></i>
                    <h3 className="text-white mt-2 mb-3">caso de exito #2</h3>
                    <p className="text-white">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Soluta, eligendi pariatur corporis libero distinctio,
                      corrupti.
                    </p>
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="single-case-studies">
                <Link to="#">
                  <img
                    src="assets/img/case_studies/case_studies_2/thumb_3.jpg"
                    alt=""
                  />
                </Link>
                <Link
                  to="assets/img/case_studies/case_studies_2/thumb_3.jpg"
                  data-fancybox="images"
                  className="case-studies-overlay"
                >
                  <span className="overlay-text text-center p-3">
                    <i className="fas fa-search-plus fa-2x text-white"></i>
                    <h3 className="text-white mt-2 mb-3">caso de exito #1</h3>
                    <p className="text-white">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Soluta, eligendi pariatur corporis libero distinctio,
                      corrupti.
                    </p>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <Link
              to="/socias"
              className="btn btn-bordered mt-4"
              style={{ maxWidth: "380px" }}
            >
              Lee las historias de nuestras socias
            </Link>
          </div>
        </div>
      </section>

      <section className="section content-area bg-grey ptb_150">
        <div className="shape shape-top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
            fill="#FFFFFF"
          >
            <path
              className="shape-fill"
              d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
            c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
            c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
            />
          </svg>
        </div>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-12 col-lg-6">
              <div className="content-inner text-center">
                <div className="section-heading text-center mb-3">
                  <h2>Apoya el Cacao con Propósito</h2>
                  <p className="d-none d-sm-block mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Laborum obcaecati dignissimos quae quo ad iste ipsum
                    officiis deleniti asperiores sit.
                  </p>
                  <p className="d-block d-sm-none mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Laborum obcaecati.
                  </p>
                </div>
                <ul className="content-list text-left">
                  <li className="single-content-list media py-2">
                    <div className="content-icon pr-4">
                      <span className="color-1">
                        <i className="fas fa-angle-double-right"></i>
                      </span>
                    </div>
                    <div className="content-text media-body">
                      <span>
                        <b>Differencia de nuestro cacao #1</b>
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Veritatis, distinctio.
                      </span>
                    </div>
                  </li>
                  <li className="single-content-list media py-2">
                    <div className="content-icon pr-4">
                      <span className="color-1">
                        <i className="fas fa-angle-double-right"></i>
                      </span>
                    </div>
                    <div className="content-text media-body">
                      <span>
                        <b>Differencia de nuestro cacao #2</b>
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Veritatis, distinctio.
                      </span>
                    </div>
                  </li>
                  <li className="single-content-list media py-2">
                    <div className="content-icon pr-4">
                      <span className="color-1">
                        <i className="fas fa-angle-double-right"></i>
                      </span>
                    </div>
                    <div className="content-text media-body">
                      <span>
                        <b>Differencia de nuestro cacao #3</b>
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Veritatis, distinctio.
                      </span>
                    </div>
                  </li>
                </ul>
                {/* <Link to="#" className="btn btn-bordered mt-4">
                  Haz tu pedido directo con nosotras
                </Link> */}
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="service-thumb mx-auto pt-4 pt-lg-0">
                <img
                  src="assets/img/content/content_thumb.png"
                  alt=""
                  style={{ width: "543px", height: "450px" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="shape shape-bottom">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
            fill="#FFFFFF"
          >
            <path
              className="shape-fill"
              d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
        c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
        c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
            />
          </svg>
        </div>
      </section>

      <section id="contact" className="contact-area ptb_100">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-12 col-lg-5">
              <div className="section-heading text-center mb-3">
                <h2>Conoce a las manos detrás del cacao</h2>
                <p className="d-none d-sm-block mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Laborum obcaecati dignissimos quae quo ad iste ipsum officiis
                  deleniti asperiores sit.
                </p>
                <p className="d-block d-sm-none mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Laborum obcaecati.
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-6 pt-4 pt-lg-0">
              <div className="contact-box text-center">
                <form
                  id="contact-form"
                  method="POST"
                  action="assets/php/mail.php"
                >
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          placeholder="Name"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          placeholder="Company Name"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          placeholder="Email"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="subject"
                          placeholder="Phone"
                          required="required"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          name="message"
                          placeholder="Message"
                          required="required"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn btn-bordered active btn-block mt-3"
                      >
                        <span className="text-white pr-3">
                          <i className="fas fa-paper-plane"></i>
                        </span>
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
                <p className="form-message"></p>
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

export default Home;
