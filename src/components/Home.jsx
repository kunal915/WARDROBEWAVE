import React, { useState, useEffect } from "react";
import Product from "./Products";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import { toast } from "react-toastify";
import CardGroup from "./products/CardGroup";

const Home = () => {
  const [mycontent, setContent] = useState();
  const [otherServices, setothersercvices] = useState([]);

  useEffect(() => {
    const backendEndpoint = "http://localhost:5000/api/contents/";
    fetch(backendEndpoint)
      .then((response) => response.json())
      .then((data) => {
        console.log("API Response:", data);
        setContent(data[0]);
        setothersercvices(data[1]);
      })
      .catch((error) => {
        console.error("Error while fetching content:", error);
      });
  }, []);
  useEffect(() => {
    toast.info("Call us at: 123-456-7890", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }, []);
  return (
    <div>
      <Header />
      <Main />
      <div>
        <h1 style={{ fontstyle: " italic" }} class="mt-5">
          Shop Our Top Catogories
        </h1>
      </div>
      <hr />
      <Product />
      <div
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}
      ></div>
      <div style={{ backgroundColor: "#f2f2f2" }}>
        <div className="row">
          {/* <div className="col-lg-6 d-flex justify-content-center align-items-center">
            <div style={{ marginBottom: "20px" }}>
              <ReactPlayer
                url={app}
                width="400px"
                height="500px"
                playing={true}
                controls={true}
              />
            </div>
          </div> */}

          {/* <div class="col-lg-6 d-flex align-items-center justify-content-center">
            <div class=" text-center">
              <h1 style={{ fontSize: "3em", linHeight: "1.1" }}>
                By far the easiest
                <br />
                free website builder
              </h1>
              <p>Create a website using ready-made styles and layouts.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br /> Fugiat adipisci reprehenderit obcaecati, fugit sit iusto
                illo
                <br /> ex officiis, consequatur, illum magni voluptas esse
                rerum.
                <br />
                Nemo!
              </p>
            </div>
          </div> */}
        </div>
      </div>
      <br />
      <hr />
      <br />

      <CardGroup />
      <br />
      <Footer />
    </div>
  );
};
export default Home;
