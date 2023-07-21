import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";


class Index extends Component {
  render() {
    return (
      <Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
          <div className="container">
            <a className="navbar-brand" href="#page-top">
              <img src="assets/img/navbar-logo.svg" alt="Locatel" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Menu
              <i className="fas fa-bars ms-1"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#services">
                    Servicios
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={`/login`}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="btn btn-primary" href="#Register">
                    Register
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <header className="masthead">
          <div className="container">
            <div className="masthead-subheading">Biembenido a nuestro banco!</div>
            <div className="masthead-heading text-uppercase">
              Es un placer conocerte
            </div>
            <a className="btn btn-primary btn-xl text-uppercase" href="#services">
              Mas informacion
            </a>
          </div>
        </header>
        <section className="page-section" id="services">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">Servicios</h2>
              <h3 className="section-subheading text-muted">
                Estos son nustros servicios.
              </h3>
            </div>
            <div className="row text-center">
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fas fa-circle fa-stack-2x text-primary"></i>
                  <i className="fas fa-usd fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="my-3">Envia dinero</h4>
                <p className="text-muted">
                  Envia dinero a todos los bancos disponibles en el pais, de una manera rapida y segura
                </p>
              </div>
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fas fa-circle fa-stack-2x text-primary"></i>
                  <i className="fas fa-credit-card fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="my-3">Maneja tu dinero</h4>
                <p className="text-muted">
                  Ten informacion de tu cuenta, recibe y guarda tu dinero.
                </p>
              </div>
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fas fa-circle fa-stack-2x text-primary"></i>
                  <i className="fas fa-lock fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="my-3">Web Security</h4>
                <p className="text-muted">
                  manten todo tu dinero seguro en nuestro sistema.
                </p>
              </div>
            </div>
          </div>
        </section>
        <footer className="footer py-4">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-4 text-lg-start">
                Copyright &copy; Locatel 2023
              </div>
              <div className="col-lg-4 my-3 my-lg-0">
                <a
                  className="btn btn-dark btn-social mx-2"
                  href="#!"
                  aria-label="Twitter"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  className="btn btn-dark btn-social mx-2"
                  href="#!"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  className="btn btn-dark btn-social mx-2"
                  href="#!"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
              <div className="col-lg-4 text-lg-end">
                <a className="link-dark text-decoration-none me-3" href="#!">
                  Privacy Policy
                </a>
                <a className="link-dark text-decoration-none" href="#!">
                  Terms of Use
                </a>
              </div>
            </div>
          </div>
        </footer>
      </Fragment>
    );
  }
}
export default Index;
