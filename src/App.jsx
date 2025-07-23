import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";

function App() {
  return (
    <div className="homepage-6 rtl">
      <Preloader />
      {/* <div id="scrollUp" title="Scroll To Top">
        <i className="fas fa-arrow-up"></i>
      </div> */}
      <div className="main overflow-hidden">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default App;
