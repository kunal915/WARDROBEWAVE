import React, { useState } from "react";

const Profile = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  return (
    <div style={{ position: "relative" }}>
      <i
        class="fa-solid fa-user"
        style={{
          fontSize: "1.5em",
          color: "rgb(13,110,253)",
          marginLeft: "0.5em",
          marginRight: "0.5em",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      ></i>
      {showDropdown && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 1,
            backgroundColor: "#f9f9f9",
            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
            padding: "0.5em",
          }}
        >
          {/* Your dropdown content goes here */}
          <p>Dropdown content</p>
          <p>Another item</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
