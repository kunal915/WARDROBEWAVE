import React, { useState, useRef } from "react";

const Signup = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    image: "",
  });
  const [imageadd, setimageadd] = useState();

  const loginModalRef = useRef();

  let name, value;
  const handelChange = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const AvatarUpload = async () => {
    var formdata = new FormData();
    formdata.append("image", imageadd);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };
    const res = await fetch(
      "http://localhost:5000/api/avatar-upload",
      requestOptions
    );
    const data = await res.json();
    UserData(data.image.filename);
  };

  const UserData = async (filename) => {
    // e.preventDefault();
    const { username, email, password } = user;
    const res = await fetch("http://localhost:5000/api/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
        image: filename,
      }),
    });
    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Reg");
    } else {
      window.alert(" Registration successfull");
      closeModal();
      console.log("Registration successfull");
    }
  };
  const closeModal = () => {
    loginModalRef.current.classList.remove("show");
    const backdrop = document.querySelector(".modal-backdrop");
    backdrop.parentNode.removeChild(backdrop);
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
              {/* <button className="btn btn-primary w-100 mb-4">
                                <span className="fa fa-google me-2"></span> Sign up With Google
                            </button>
                            <button className="btn btn-primary w-100 mb-4">
                                <span className="fa fa-facebook me-2"></span> Sign up With Facebook
                            </button> */}
              <form method="POST">
                <div className="mb-3">
                  <label htmlFor="imageInput" className="form-label">
                    Profile Image
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="imageInput"
                    accept="image/*"
                    onChange={(e) => {
                      setimageadd(e.target.files[0]);
                    }}
                  />
                </div>

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
                  onClick={AvatarUpload}
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
