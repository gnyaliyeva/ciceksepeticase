import React from "react";

import Button from "../../components/Button";

import "./style.scss";

const Card = ({ key, title, label, price, img }) => {
  return (
    <div className="card-container" key={`product_${key}`}>
      <img src={img} alt="ciceksepeti-market-urun" />
      <span className="card-title">{title}</span>
      <span className="card-label">{label}</span>
      <span className="price-text">{price}</span>
      <Button>Sepete Ekle</Button>
    </div>
  );
};

export default Card;
