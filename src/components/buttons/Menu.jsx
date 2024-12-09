// import React from "react";
// import { useDispatch } from "react-redux";
// import { clearUserdata } from "../../slices/userSlice";

// const Menu = ({ userImage, userName, userEmail }) => {
//   const dispatch = useDispatch();

//   const handleClearUserData = () => {
//     dispatch(clearUserdata());
//   };

//   return (
//     <li className="nav-item dropdown">
//       <div className="dropdown">
//         <a
//           className="nav-link"
//           href="#"
//           id="userDropdown"
//           role="button"
//           data-bs-toggle="dropdown"
//           aria-haspopup="true"
//           aria-expanded="false"
//         >
//           <img
//             // src="/assets/images/home/man.webp"
//             src={userImage}
//             alt="Profile Picture"
//             className="profile-picture"
//           />
//         </a>

//         <div
//           className="dropdown-menu"
//           aria-labelledby="userDropdown"
//           style={{ left: "-100px" }}
//         >
//           <div className="dropdown-item">
//             <div className="d-flex align-items-center text-left">
//               <div
//                 className="profile-pic mr-5"
//                 style={{ marginRight: "0.5em" }}
//               >
//                 <img
//                   src="/assets/images/home/man.webp"
//                   alt="Profile"
//                   className="profile-picture"
//                 />
//               </div>
//               <div className="profile-info">
//                 <h3
//                   style={{
//                     fontSize: "1em",
//                     color: "black",
//                     textDecoration: "none!important",
//                   }}
//                 >
//                   {userName && <span className="user-name">{userName}</span>}
//                 </h3>
//                 <span
//                   style={{
//                     fontSize: "1em",
//                     color: "black",
//                     textDecoration: "none!important",
//                   }}
//                 >
//                   {userEmail && <span className="user-email">{userEmail}</span>}
//                 </span>
//               </div>
//             </div>
//           </div>
//           <div className="dropdown-divider"></div>
//           <a
//             className="dropdown-item"
//             href="/logout"
//             onClick={(e) => {
//               handleClearUserData();
//             }}
//           >
//             Logout
//           </a>
//         </div>
//       </div>
//     </li>
//   );
// };

// export default Menu;
