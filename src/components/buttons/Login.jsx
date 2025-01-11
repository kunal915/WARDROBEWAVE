import React, { useState } from "react";
import { addUserInfo } from "../../slices/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isModalOpen, setModalOpen] = useState(false);

  let name, value;
  const handelChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { username, email, password } = user;
    try {
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
        dispatch(addUserInfo(data.user));
        setModalOpen(false); // Close the modal
        console.log("Login successful");
      }
    } catch (error) {
      console.error("Error during login:", error);
      window.alert("Something went wrong! Please try again later.");
    }
  };

  return (
    <>
      <button
        type="button"
        className="btn ms-auto"
        onClick={() => setModalOpen(true)}
      >
        <span className="fa fa-sign-in me-1"></span> Login
      </button>

      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              background: "white",
              borderRadius: "8px",
              padding: "20px",
              width: "400px",
              maxWidth: "90%",
              position: "relative",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <h5>Login</h5>
              <button
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                }}
                onClick={() => setModalOpen(false)}
              >
                ×
              </button>
            </div>
            <div>
              <form method="POST" onSubmit={PostData}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Username or email address *
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={user.email}
                    onChange={handelChange}
                    placeholder="Please Enter Your Email"
                  />
                  <div className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
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
                    id="remember"
                  />
                  <label className="form-check-label" htmlFor="remember">
                    Remember me
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn btn-outline-primary w-100 mt-5"
                >
                  LOG IN
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
