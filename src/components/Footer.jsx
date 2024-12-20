import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer
        className="text-center text-lg-start"
        style={{ backgroundColor: "rgb(21,21,21)", color: "white" }}
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-google"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>PrintTechPros Media Co.
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>

                <p>
                  <NavLink
                    style={{ color: "white", textDecoration: "none" }}
                    to="/about"
                  >
                    About us
                  </NavLink>
                </p>
                <p>
                  <NavLink
                    style={{ color: "white", textDecoration: "none" }}
                    to="/contact"
                  >
                    Contact us
                  </NavLink>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3"></i> Noida, Sector 62
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  Gmail
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> + 98 878 675 67
                </p>
                <p>
                  <i className="fas fa-print me-3"></i> + 87 768 675 45
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2021 Copyright:
        </div>
      </footer>
    </div>
  );
};

export default Footer;
