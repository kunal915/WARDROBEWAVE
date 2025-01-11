import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import conta2 from "../assests/image/conta2.jpeg";
import conta from "../assests/image/conta.jpeg";

const Contact = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });
  let name, value;
  const handelChange = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, phone } = user;
    const res = await fetch("http://localhost:5000/api/contacts/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone }),
    });
    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Reg");
    } else {
      window.alert(" Registration successfull");
      console.log("Registration successfull");
    }
  };
  return (
    <div>
      <Header />

      <div class="row">
        <div class="col-lg-9">
          <div style={{ marginLeft: "1em" }}>
            <h2
              class="border-bottom pb-4"
              style={{
                color: "rgb(8,38,54)",
                fontWeight: "700",
                textAlign: "center",
              }}
            >
              CONTACT US | WARDROBEWAVE
            </h2>

            <p
              class="ml-5"
              style={{
                fontFamily: "Georgia, 'Times New Roman', Times, serif",
                fontStyle: "italic",
              }}
            >
              We’d love to hear from you! Whether you have a question about our
              products, need assistance with your order, or just want to share
              your feedback, we’re here to help.
              <br />
            </p>
            <div class="ml-5">
              <h5 class="mt-3" style={{ fontWeight: "500" }}>
                📧 Email :
                <span
                  style={{
                    fontSize: "medium",
                    fontStyle: "oblique",
                    fontWeight: "450",
                  }}
                >
                  support@wardrobe.com
                </span>
              </h5>
              <h5 class="mt-3" style={{ fontWeight: "500" }}>
                📞 Phone
                <span
                  style={{
                    fontSize: "medium",
                    fontStyle: "oblique",
                    fontWeight: "450",
                  }}
                >
                  +91 123-456-7890
                </span>
              </h5>
              <h5 class="mt-3" style={{ fontWeight: "500" }}>
                Fax :{" "}
                <span
                  style={{
                    fontSize: "medium",
                    fontStyle: "oblique",
                    fontWeight: "450",
                  }}
                >
                  1-850-201-6911
                </span>
              </h5>
            </div>
            <div class="ml-5 mt-4">
              <h5 style={{ fontWeight: "500" }}>
                Head Office 🏢 <hr />
                Address: Ward Robe Pvt. Ltd. 123, Fashion Street, Mumbai,
                <br /> Maharashtra, India - 400001
              </h5>
            </div>
            <div class="ml-5 mt-4">
              <h2>Have a Query? Fill the Form Below</h2>
              <p>
                Let us know how we can help, and we’ll get back to you within
                24-48 hours:
              </p>
            </div>
            <div className=" mt-5">
              <div className="row">
                <div className="col-md-6">
                  <form method="POST">
                    <div className="mb-3">
                      <label htmlFor="fullName" className="form-label">
                        Full Name
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="fullname"
                        name="name"
                        value={user.name}
                        onChange={handelChange}
                        placeholder="Full Name"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email address
                      </label>
                      <input
                        className="form-control"
                        type="email"
                        id="email"
                        name="email"
                        value={user.email}
                        onChange={handelChange}
                        placeholder="Email Address"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="phone" className="form-label">
                        Phone
                      </label>{" "}
                      <br />
                      <input
                        className="form-control"
                        type="phone"
                        id="phone"
                        name="phone"
                        value={user.phone}
                        onChange={handelChange}
                        placeholder="Phone No."
                      />
                    </div>
                    <div className="form-group form button">
                      <input
                        type="submit"
                        name="signup"
                        id="signup"
                        className="form-submit btn"
                        value="register"
                        onClick={PostData}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="col-lg-3 justify-content-center"
          style={{ marginTop: "5em" }}
        >
          <div
            style={{
              backgroundColor: "rgb(234, 240, 245)",
              height: "7em",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h3>call us at 889-9899-789</h3>
          </div>
          <div
            class="mt-4"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img src={conta2} alt="img" class="img-fluid" />
          </div>
          <div class="mt-5 " style={{ backgroundColor: "rgb(234, 240, 245)" }}>
            <h5 className="mt-5" style={{ marginLeft: "2em" }}>
              Connect on Social Media
            </h5>
            <p>
              Stay updated on the latest collections, offers, and style tips.
              Follow us on:
            </p>
            <li className="m-4">🌐 Instagram</li>
            <li className="m-4">🌐 Facebook</li>
            <li className="m-4">🌐 Twitter</li>
          </div>
          <div
            class="mt-4 mb-5"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img src={conta} alt="img" class="img-fluid" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
