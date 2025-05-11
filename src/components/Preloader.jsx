import React, { useEffect } from "react";

const Preloader = () => {
  useEffect(() => {
    // Hide preloader when page is loaded
    window.addEventListener("load", () => {
      const preloader = document.getElementById("preloader");
      if (preloader) {
        preloader.style.display = "none";
      }
    });
  }, []);

  return (
    <div id="preloader">
      <div id="digimax-preloader" className="digimax-preloader">
        <div className="preloader-animation">
          <div className="spinner"></div>
          <div className="loader">
            <span data-text-preloader="M" className="animated-letters">
              M
            </span>
            <span data-text-preloader="U" className="animated-letters">
              U
            </span>
            <span data-text-preloader="K" className="animated-letters">
              K
            </span>
            <span data-text-preloader="A" className="animated-letters">
              A
            </span>
            <span data-text-preloader="H" className="animated-letters">
              H
            </span>
            <span data-text-preloader="U" className="animated-letters">
              U
            </span>
          </div>
          <p className="fw-5 text-center text-uppercase">Loading</p>
        </div>
        <div className="loader-animation">
          <div className="row h-100">
            <div className="col-3 single-loader p-0">
              <div className="loader-bg"></div>
            </div>
            <div className="col-3 single-loader p-0">
              <div className="loader-bg"></div>
            </div>
            <div className="col-3 single-loader p-0">
              <div className="loader-bg"></div>
            </div>
            <div className="col-3 single-loader p-0">
              <div className="loader-bg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
