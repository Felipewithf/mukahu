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
                    <img src="/assets/img/team/r.trivino.jpg" alt="" />
                  </Link>
                </div>
                <div className="team-content p-3">
                  <Link to="#">
                    <h3 className="mb-2">Rubiela Triviño Valencia</h3>
                  </Link>
                  <h5 className="text-uppercase">Finca Los Almendros</h5>
                  <br />
                  <p>Cacaocultora en Gigante Huila.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="single-team">
                <div className="team-photo">
                  <Link to="#">
                    <img src="/assets/img/team/e.ramirez.jpg" alt="" />
                  </Link>
                </div>
                <div className="team-content p-3">
                  <Link to="#">
                    <h3 className="mb-2">Erika Alejandra Ramírez Gordillo</h3>
                  </Link>
                  <h5 className="text-uppercase">
                    Finca Las Juntas - Lote El Cedro, vereda El Rodeo
                  </h5>
                  <br />
                  <p>
                    Desde mi vinculación a la sede campesina de la Asociación
                    Coometas Campesinas y Saludarte (A.SALUDARTE) me motivé para
                    unirme a MUKAHU e iniciamos con mi familia y mis colegas de
                    A.SALUDARTE, el emprendimiento Cacao Minú, minuciosamente
                    preparado por ti. Motivadas por promover la salud mental,
                    hoy día mi familia cultiva el cacao en Gigante y lo
                    transformamos artesanalmente en chocolate de mesa con clavos
                    y canela, como parte de la rehabilitación psicosocial en
                    situaciones de problemas y trastornos mentales.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="single-team">
                <div className="team-photo">
                  <Link to="#">
                    <img src="/assets/img/team/a.mendez.jpg" alt="" />
                  </Link>
                </div>
                <div className="team-content p-3">
                  <Link to="#">
                    <h3 className="mb-2">Argenis Osso Mendez</h3>
                  </Link>
                  <h5 className="text-uppercase">Finca el Oasis</h5>
                  <br />
                  <p>
                    Ubicada en el municipio de Gigante, Huila vereda la
                    guandinosa, inicia su proceso como cacaocultora por fuerza
                    mayor ya que al fallecer su esposo, esta hermosa actividad
                    agricola le permite el sostenimiento economico para ella y
                    sus tres hijos, aprende de cero esta actividad y hoy en dia
                    tiene una hermosa finca certificada por el ICA y ya dos
                    hijas profesionales gracias q esta hermosa labor como
                    Cacaocultora.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="single-team">
                <div className="team-photo">
                  <Link to="#">
                    <img src="/assets/img/team/a.cantor.jpg" alt="" />
                  </Link>
                </div>
                <div className="team-content p-3">
                  <Link to="#">
                    <h3 className="mb-2">Aura Nelly Cantor</h3>
                  </Link>
                  <h5 className="text-uppercase">
                    El porvenir 1-vereda la guandinosa
                  </h5>
                  <br />
                  <p>
                    Con 5 ectareas, Tengo 500 palos de cacao ya produciendo y mi
                    deseo es seguir cultivando cada vez mas. Todo el núcleo
                    familiar esta ayudandome a que este sueño sea posible y más
                    adelante con ayuda de Dios poder comprar otro lote para
                    seguir cultivando más palos de cacao. Gracias a mi esposo
                    que me está ayudando en este proceso que nos brinda una
                    ayuda más en nuestra economía.
                  </p>
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
                    <h3 className="mb-2">Leidy Johanna Cañaveral</h3>
                  </Link>
                  <h5 className="text-uppercase"></h5>
                  <br />
                  <p>Cacaocultora en Gigante Huila.</p>
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
