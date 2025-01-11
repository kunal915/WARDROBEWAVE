import React from "react";

const CardComponent = ({ imgSrc, title, text, footerText }) => {
  const cardStyle = {
    width: "18rem",
    margin: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
  };

  const imgStyle = {
    width: "100%",
    height: "200px",

    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
  };

  const footerStyle = {
    fontSize: "0.85rem",
    backgroundColor: "#f8f9fa",
    textAlign: "center",
    padding: "8px 0",
  };

  return (
    <div className="card" style={cardStyle}>
      <img
        className="card-img-top"
        src={imgSrc}
        alt="Card image cap"
        style={imgStyle}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
      </div>
      <div className="card-footer" style={footerStyle}>
        <small className="text-muted">{footerText}</small>
      </div>
    </div>
  );
};

export default CardComponent;
