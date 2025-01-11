import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useSelector } from "react-redux";

const Checkout = () => {
  const cart = useSelector((state) => state.cart);
  const { cartTotalQuantity } = useSelector((state) => state.cart);

  const [order, setOrder] = useState({
    firstname: "",
    lastname: "",
    user: "",
    email: "",
    shippingAddress1: "",
    shippingAddress2: "",
    country: "",
    state: "",
    city: "",
    zip: "",
    phone: "",
    status: "",
    totalPrice: "",
  });
  let name, value;
  const handelChange = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setOrder({ ...order, [name]: value });
  };
  // const PostData = async (e) => {
  //   e.preventDefault();
  //   const {
  //     firstname,
  //     lastname,
  //     user,
  //     email,
  //     shippingAddress1,
  //     shippingAddress2,
  //     country,
  //     state,
  //     city,
  //     zip,
  //     phone,
  //     status,
  //     totalPrice,
  //   } = order;
  //   const res = await fetch("http://localhost:5000/api/orders/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       firstname,
  //       lastname,
  //       user,
  //       email,
  //       shippingAddress1,
  //       shippingAddress2,
  //       country,
  //       state,
  //       city,
  //       zip,
  //       phone,
  //       status,
  //       totalPrice,
  //     }),
  //   });
  //   const data = await res.json();
  //   if (data.status === 422 || !data) {
  //     window.alert("Invalid Order");
  //     console.log("Invalid Order");
  //   } else {
  //     window.alert(" Order successfull");
  //     console.log("Order successfull");
  //   }
  // };
  return (
    <>
      <Header />
      <div className="container my-5">
        <div className="row g-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">Your cart</span>
              <span className="badge bg-primary rounded-pill">
                {cartTotalQuantity}
              </span>
            </h4>
            <ul className="list-group mb-3">
              <li className="list-group-item d-flex justify-content-between">
                <span>Total (Ruppe)</span>
                <strong>₹{cart.cartTotalAmount}</strong>
              </li>
            </ul>

            {/* <form className="card p-2">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Promo code" />
                                <button type="submit" className="btn btn-secondary">Redeem</button>
                            </div>
                        </form> */}
          </div>
          <div className="col-md-7 col-lg-8">
            <h4 className="mb-3">Billing address</h4>
            <form className="needs-validation" novalidate="">
              <div className="row g-3">
                <div className="col-sm-6">
                  <label htmlFor="firstName" className="form-label">
                    First name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder=""
                    name="firstname"
                    required=""
                    value={order.firstname}
                    onChange={handelChange}
                  />
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>

                <div className="col-sm-6">
                  <label htmlFor="lastName" className="form-label">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder=""
                    name="lastname"
                    required=""
                    value={order.lastname}
                    onChange={handelChange}
                  />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <div className="input-group has-validation">
                    <span className="input-group-text">@</span>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="Username"
                      required=""
                      value={order.user}
                      name="user"
                      onChange={handelChange}
                    />
                    <div className="invalid-feedback">
                      Your username is required.
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="email" className="form-label">
                    Email <span className="text-muted">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="you@example.com"
                    name="email"
                    value={order.email}
                    onChange={handelChange}
                  />
                  <div className="invalid-feedback">
                    Please enter a valid email address htmlFor shipping updates.
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="1234 Main St"
                    required=""
                    name="shippingAddress1"
                    value={order.shippingAddress1}
                    onChange={handelChange}
                  />
                  <div className="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="address2" className="form-label">
                    Address 2 <span className="text-muted">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address2"
                    placeholder="Apartment or suite"
                    name="shippingAddress2"
                    value={order.shippingAddress2}
                    onChange={handelChange}
                  />
                </div>

                <div className="col-md-5">
                  <label htmlFor="country" className="form-label">
                    country
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="country"
                    placeholder="country name"
                    required=""
                    name="country"
                  />
                  <div
                    className="invalid-feedback"
                    value={order.country}
                    onChange={handelChange}
                  >
                    country is required.
                  </div>
                </div>

                <div className="col-md-4">
                  <label htmlFor="state" className="form-label">
                    state
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="state"
                    placeholder="state"
                    required=""
                    name="state"
                  />
                  <div
                    className="invalid-feedback"
                    value={order.state}
                    onChange={handelChange}
                  >
                    state is required.
                  </div>
                </div>
                <div className="col-md-3">
                  <label htmlFor="city" className="form-label">
                    city
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    placeholder="city"
                    required=""
                  />
                  <div
                    className="invalid-feedback"
                    value={order.city}
                    onChange={handelChange}
                  >
                    city code required.
                  </div>
                </div>
                <div className="col-md-3">
                  <label htmlFor="zip" className="form-label">
                    Zip
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="zip"
                    placeholder=""
                    required=""
                    name="zip"
                    value={order.zip}
                    onChange={handelChange}
                  />
                  <div className="invalid-feedback">Zip code required.</div>
                </div>
              </div>

              {/* <hr className="my-4" />

                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="same-address" />
                                <label className="form-check-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
                            </div>

                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="save-info" />
                                <label className="form-check-label" htmlFor="save-info">Save this information htmlFor next time</label>
                            </div> */}

              <hr className="my-4" />

              <h4 className="mb-3">Payment</h4>

              <div className="my-3">
                <div className="form-check">
                  <input
                    id="credit"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    checked=""
                    required=""
                  />
                  <label className="form-check-label" htmlFor="credit">
                    Credit card
                  </label>
                </div>
                <div className="form-check">
                  <input
                    id="debit"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    required=""
                  />
                  <label className="form-check-label" htmlFor="debit">
                    Debit card
                  </label>
                </div>
                <div className="form-check">
                  <input
                    id="paypal"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    required=""
                  />
                  <label className="form-check-label" htmlFor="paypal">
                    PayPal
                  </label>
                </div>
              </div>

              <div className="row gy-3">
                <div className="col-md-6">
                  <label htmlFor="cc-name" className="form-label">
                    Name on card
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-name"
                    placeholder=""
                    required=""
                  />
                  <small className="text-muted">
                    Full name as displayed on card
                  </small>
                  <div className="invalid-feedback">
                    Name on card is required
                  </div>
                </div>

                <div className="col-md-6">
                  <label htmlFor="cc-number" className="form-label">
                    Credit card number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-number"
                    placeholder=""
                    required=""
                  />
                  <div className="invalid-feedback">
                    Credit card number is required
                  </div>
                </div>

                <div className="col-md-3">
                  <label htmlFor="cc-expiration" className="form-label">
                    Expiration
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-expiration"
                    placeholder=""
                    required=""
                  />
                  <div className="invalid-feedback">
                    Expiration date required
                  </div>
                </div>

                <div className="col-md-3">
                  <label htmlFor="cc-cvv" className="form-label">
                    CVV
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-cvv"
                    placeholder=""
                    required=""
                  />
                  <div className="invalid-feedback">Security code required</div>
                </div>
              </div>
              <hr className="my-4" />
              <button className="w-100 btn btn-primary btn-lg" type="submit">
                Continue to checkout
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
