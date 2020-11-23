import React from "react";
import CardDetails from "./cardDetails";
import { cardInfo } from "./cardInfo";

const Cards = () => {
  return (
    <div className="cards-container">
      {cardInfo.map((card, key) => (
        <CardDetails
          key={key}
          number={card.number}
          type={card.type}
          description={card.description}
          service={card.service}
        />
      ))}
    </div>
  );
};

export default Cards;
