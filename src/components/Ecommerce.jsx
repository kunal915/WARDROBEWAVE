import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Extraction } from "../components/helper/helper";

const Ecommerce = () => {
  const [Digitalmedia, setDigitalMedia] = useState([]);
  const [digitalmarket, setDigitalmarket] = useState([]);

  useEffect(() => {
    const backendEndpoint = "http://localhost:5000/api/contents/";
    fetch(backendEndpoint)
      .then((response) => response.json())
      .then((data) => {
        console.log("API Response:", data);
        setDigitalMedia(data[3]);
        setDigitalmarket(data[6]);
      })
      .catch((error) => {
        console.error("Error while fetching content:", error);
      });
  }, []);
  return (
    <>
      <Header />

      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="/assets/images/home/digitalmedia2.jpeg"
              class="d-block w-100"
              alt="Logo"
              height="500px"
            />
          </div>
          <div class="carousel-item">
            <img
              src="/assets/images/home/printondemand.png"
              class="d-block w-100"
              alt="Web"
              height="500px"
            />
          </div>
          <div class="carousel-item">
            <img
              src="/assets/images/home/machine.jpg"
              class="d-block w-100"
              alt="Pattern"
              height="500px"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div
              className="mt-5 arian"
              style={{
                display: "flex",
                justifyContent: "center",
                marginRight: "4em",
              }}
            >
              <img
                src="/assets/images/home/e-com.jpg"
                alt=""
                style={{ width: "40em" }}
              />
            </div>
            <div style={{ backgroundColor: "#262051", color: "white" }}>
              <h1 className="mt-5" style={{ marginLeft: "0.2em" }}>
                {digitalmarket &&
                  Extraction.RemoveHTML &&
                  Extraction.FirstH1(digitalmarket.content)}
              </h1>
            </div>
            <p>
              {digitalmarket && Extraction.FirstPara(digitalmarket.content)}
            </p>
            <h4 style={{ fontWeight: "bolder" }}>
              {digitalmarket &&
                Extraction.RemoveHTML &&
                Extraction.FirstH4(digitalmarket.content)}
            </h4>
            <p>
              {digitalmarket && Extraction.SecondPara(digitalmarket.content)}
            </p>
            <h4 style={{ fontWeight: "bolder" }}>
              {digitalmarket &&
                Extraction.RemoveHTML &&
                Extraction.SecondH4(digitalmarket.content)}
            </h4>
            <p>
              {digitalmarket && Extraction.ThirdPara(digitalmarket.content)}
            </p>
            <h4 style={{ fontWeight: "bolder" }}>
              {digitalmarket &&
                Extraction.RemoveHTML &&
                Extraction.ThirdH4(digitalmarket.content)}
            </h4>
            <p>
              {digitalmarket && Extraction.FourthPara(digitalmarket.content)}
            </p>
            <h4 style={{ fontWeight: "bolder" }}>
              {digitalmarket &&
                Extraction.RemoveHTML &&
                Extraction.FourthH4(digitalmarket.content)}
            </h4>
            <p>
              {digitalmarket && Extraction.FifthPara(digitalmarket.content)}
            </p>
            <h4 style={{ fontWeight: "bolder" }}>
              {digitalmarket &&
                Extraction.RemoveHTML &&
                Extraction.FifthH4(digitalmarket.content)}
            </h4>
            <p>
              {digitalmarket && Extraction.SixthPara(digitalmarket.content)}
            </p>
            <h4 style={{ fontWeight: "bolder" }}>
              {digitalmarket &&
                Extraction.RemoveHTML &&
                Extraction.SixthH4(digitalmarket.content)}
            </h4>
            <p>
              {digitalmarket && Extraction.SeventhPara(digitalmarket.content)}
            </p>
            <h4 style={{ fontWeight: "bolder" }}>
              {digitalmarket &&
                Extraction.RemoveHTML &&
                Extraction.SeventhH4(digitalmarket.content)}
            </h4>
            <p>
              {digitalmarket && Extraction.EightPara(digitalmarket.content)}
            </p>
            <h4 style={{ fontWeight: "bolder" }}>
              {digitalmarket &&
                Extraction.RemoveHTML &&
                Extraction.EightH4(digitalmarket.content)}
            </h4>
            <p>
              {digitalmarket && Extraction.NinthPara(digitalmarket.content)}
            </p>
            <h4 style={{ fontWeight: "bolder" }}>
              {digitalmarket &&
                Extraction.RemoveHTML &&
                Extraction.NinthH4(digitalmarket.content)}
            </h4>
            <p>
              {digitalmarket && Extraction.ThenthPara(digitalmarket.content)}
            </p>
            <div
              className="row mt-5 mb-5"
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
              <div className="col-lg-4 mt-5">
                <div className="card" style={{ width: "22rem" }}>
                  <img
                    className="card-img-top"
                    src="/assets/images/home/web.jpg"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h4 className="card-title">
                      {Digitalmedia &&
                        Extraction.RemoveHTML &&
                        Extraction.FirstH4(Digitalmedia.content)}
                    </h4>
                    <p className="card-text">
                      {Digitalmedia &&
                        Extraction.RemoveHTML &&
                        Extraction.SecondPara(Digitalmedia.content)}
                    </p>
                    <NavLink to="/webDevlopment">
                      <button
                        class="btn mt-2"
                        style={{
                          width: "10em",
                          height: "3em",
                          backgroundColor: "#1a73e8",
                          color: "white",
                          fontsize: " 1.2em",
                        }}
                      >
                        Click here
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mt-5">
                <div className="card" style={{ width: "22rem" }}>
                  <img
                    className="card-img-top"
                    src="/assets/images/home/mobile.jpeg"
                    alt="Card image cap"
                    style={{ height: "12em" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {Digitalmedia &&
                        Extraction.RemoveHTML &&
                        Extraction.SecondH4(Digitalmedia.content)}
                    </h5>
                    <p className="card-text">
                      {Digitalmedia &&
                        Extraction.RemoveHTML &&
                        Extraction.ThirdPara(Digitalmedia.content)}
                    </p>
                    <NavLink to="/seo">
                      <button
                        class="btn mt-2"
                        style={{
                          width: "10em",
                          height: "3em",
                          backgroundColor: "#1a73e8",
                          color: "white",
                          fontsize: " 1.2em",
                        }}
                      >
                        Click here
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <ul className="mt-5">
              <li className="p-3">Content Markitnig</li>
              <li className="p-3">Search Engine Optimization</li>
              <li className="p-3">Social Media Optimization</li>
              <li className="p-3">pay-per-click</li>
              <li className="p-3">SOCIAL MEDIA MARKITING</li>
            </ul>
            <div
              style={{
                position: "relative",
                padding: "40px 20px",
                textAlign: "center",
                backgroundColor: "lightskyblue",
                fontSize: "1.4em",
                color: "white",
              }}
            >
              <div className="icon-box">
                <span>
                  <i class="fa-solid fa-phone fa-xl"></i>
                </span>
              </div>
              <div className="text p-3">
                Got any Questions?
                <br />
                call us today
              </div>
              <div className="number">8130479273</div>
              <div className="email">contact@cyboserver.com</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Ecommerce;
