import React, { useState, useRef } from "react";

const Signup = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const loginModalRef = useRef();

  let name, value;
  const handelChange = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const UserData = async (e) => {
    e.preventDefault();

    const { username, email, password } = user;

    try {
      const res = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      });

      const data = await res.json();

      if (res.status === 422 || !data) {
        window.alert("Invalid Registration");
        console.log("Invalid Registration");
      } else {
        window.alert("Registration successful");
        console.log("Registration successful");
        closeModal();
      }
    } catch (error) {
      console.error("Error during registration:", error);
      window.alert("Something went wrong! Please try again later.");
    }
  };

  const closeModal = () => {
    loginModalRef.current.classList.remove("show");
    const backdrop = document.querySelector(".modal-backdrop");
    if (backdrop) {
      backdrop.parentNode.removeChild(backdrop);
    }
  };

  return (
    <div className="btnn">
      <button
        type="button"
        className="btn  ms-2"
        data-bs-toggle="modal"
        data-bs-target="#signupModal"
      >
        <span className="fa fa-user-plus me-1"></span> Register
      </button>

      <div
        className="modal fade"
        id="signupModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        ref={loginModalRef}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                REGISTER
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form method="POST">
                <div className="mb-3">
                  <label htmlFor="exampleInput" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInput"
                    name="username"
                    value={user.username}
                    onChange={handelChange}
                    placeholder="Full Name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="email"
                    value={user.email}
                    onChange={handelChange}
                    placeholder="Enter Your Email"
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    name="password"
                    value={user.password}
                    onChange={handelChange}
                    placeholder="Password"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-outline-primary w-100 mt-5"
                  name="register"
                  id="register"
                  value="register"
                  onClick={UserData}
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
