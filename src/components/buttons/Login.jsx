import React, { useState, useRef } from "react";
import { addUserInfo } from "../../slices/userSlice";
import { useSelector, useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [datauser, setdataUser] = useState();

  const loginModalRef = useRef();
  let name, value;
  const handelChange = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const PostData = async (e) => {
    e.preventDefault();
    const { username, email, password } = user;
    const res = await fetch("http://localhost:5000/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    });
    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("Invalid Password");
      console.log("Invalid Password");
    } else {
      // setdataUser(data.user);
      // localStorage.setItem("status", "true");
      // localStorage.setItem("logindata", JSON.stringify(data.user));
      dispatch(addUserInfo(data.user));

      // localStorage.getItem("lastname");
      // window.alert(" Login successfull");
      closeModal();
      console.log("Login successfull");
    }
  };
  const closeModal = () => {
    loginModalRef.current.classList.remove("show"); // Remove the 'show' class to hide the modal
    const backdrop = document.querySelector(".modal-backdrop");
    backdrop.parentNode.removeChild(backdrop); // Remove the backdrop element
  };

  return (
    <>
      <button
        type="button"
        className="btn ms-auto"
        data-bs-toggle="modal"
        data-bs-target="#loginModal"
      >
        <span className="fa fa-sign-in me-1"></span> Login
      </button>
      <div
        className="modal fade"
        id="loginModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        ref={loginModalRef}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Login
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {/* <button className="btn btn-primary w-100 mb-4">
                               <span className="fa fa-google me-2"></span> Sign in With Google
                            </button>
                            <button className="btn btn-primary w-100 mb-4">
                               <span className="fa fa-facebook me-2"></span> Sign in With Facebook
                            </button> */}
              <form method="POST">
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Username or email address *
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="email"
                    value={user.email}
                    onChange={handelChange}
                    placeholder="Please Enter Your Email"
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
                    placeholder="Enter Your Password"
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Remember me
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn btn-outline-primary w-100 mt-5"
                  name="Login"
                  id="Login"
                  value="Login"
                  onClick={PostData}
                >
                  LOG IN
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
