import React from "react";
import CardComponent from "./CardComponent";
import card1 from "../../assests/image/card1.jpg";
import card2 from "../../assests/image/card2.jpg";
import card3 from "../../assests/image/card3.jpg";

const CardGroup = () => {
  const cardsData = [
    {
      imgSrc: card1,
      title: "Women's Summer Dress",
      text: "A lightweight, stylish summer dress perfect for any occasion.",
      footerText: "Last updated 3 mins ago",
    },
    {
      imgSrc: card2,
      title: "Women's Handbag",
      text: "Elegant leather handbag with spacious compartments.",
      price: "₹1,499",
      footerText: "Last updated 3 mins ago",
    },
    {
      imgSrc: card3,
      title: "Men's Casual Shirt",
      text: "Classic cotton shirt for a casual, yet polished look.",
      footerText: "Last updated 3 mins ago",
    },
  ];

  return (
    <div className="card-group">
      {cardsData.map((card, index) => (
        <CardComponent
          key={index}
          imgSrc={card.imgSrc}
          title={card.title}
          text={card.text}
          footerText={card.footerText}
        />
      ))}
    </div>
  );
};

export default CardGroup;
