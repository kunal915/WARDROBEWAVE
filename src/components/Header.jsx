import React, { useState, useEffect, useRef } from "react";
import { clearUserdata } from "../slices/userSlice";
import { NavLink } from "react-router-dom";
import CartBtn from "./buttons/CartBtn";
import Login from "./buttons/Login";
import Signup from "./buttons/Signup";
import { useSelector, useDispatch } from "react-redux";
import clothinglogo from "../assests/image/clothinglogo.jpg";

const Header = ({ userImage, userName, userEmail }) => {
  const { userData, status } = useSelector((state) => state.userData);
  const dispatch = useDispatch();

  const handleClearUserData = () => {
    dispatch(clearUserdata());
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userimage, setuserImage] = useState("");
  const [username, setUserName] = useState("");
  const [useremail, setUserEmail] = useState("");

  const womenRef = useRef(null);

  console.log(womenRef.current);

  const handleLogin = (username, email) => {
    setIsLoggedIn(true);
    setUserName(username);
    setUserEmail(email);
  };

  useEffect(() => {
    setIsLoggedIn(status == false ? false : true);
    setUserName(userData.username);
    setUserEmail(userData.email);
    setuserImage(userData.image);
  }, [userData]);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <NavLink className="nav-link list" aria-current="page" to="/">
            <img
              src={clothinglogo}
              className="card-img-top"
              style={{ width: "3em" }}
              alt="Logo"
            />
          </NavLink>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <NavLink className="nav-link list" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  ref={womenRef}
                  className="nav-link list"
                  to="/CustomDesign/:type"
                >
                  Women's Fashion
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link list" to="/ShopStore">
                  Men's Fashion
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link list" to="/contact">
                  Contact Us
                </NavLink>
              </li>
            </ul>

            {isLoggedIn ? (
              <>
                <li className="nav-item dropdown">
                  <div className="dropdown">
                    <a
                      className="nav-link"
                      href="#"
                      id="userDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {username && (
                        <span className="user-name">{username}</span>
                      )}
                    </a>

                    <div
                      className="dropdown-menu"
                      aria-labelledby="userDropdown"
                      style={{ left: "-90px" }}
                    >
                      <div className="dropdown-item">
                        <div className="d-flex align-items-center text-left">
                          <div className="profile-info">
                            <h3 style={{ fontSize: "1em", color: "black" }}>
                              {username && (
                                <span className="user-name">{username}</span>
                              )}
                            </h3>
                            <span style={{ fontSize: "1em", color: "black" }}>
                              {useremail && (
                                <span className="user-email">{useremail}</span>
                              )}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="dropdown-divider"></div>
                      <a
                        className="dropdown-item"
                        href="/logout"
                        onClick={handleClearUserData}
                      >
                        Logout
                      </a>
                    </div>
                  </div>
                </li>
                <CartBtn />
              </>
            ) : (
              <>
                <Login onLogin={handleLogin} />
                <Signup />
                <CartBtn />
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
