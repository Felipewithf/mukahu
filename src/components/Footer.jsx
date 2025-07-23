import React from "react";

const Footer = () => {
  return (
    <footer className="section footer-area">
      <div className="footer-bottom bg-grey">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="copyright-area d-flex flex-wrap justify-content-center justify-content-sm-between text-center py-4">
                <div className="copyright-left">
                  &copy; Copyrights 2025 Mukahu. Todos los derechos reservados.
                </div>
                <div className="copyright-right">
                  pagina creada con <i className="fas fa-heart"></i> por -
                  <a href="https://1920.digital" target="_blank">
                    1920Digital
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
