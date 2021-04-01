import React, { useState } from "react";
import PropTypes from "prop-types";

import Button from "../../components/Button";
import Counter from "../../components/Counter";

import "./style.scss";

const Card = ({ id, title, label, price, img }) => {
  const [productId, setProductId] = useState(null);
  const [count, setCounter] = useState(0);

  return (
    <div className="card-container">
      <img src={img} alt="ciceksepeti-market-urun" />
      <span className="card-title">{title}</span>
      <span className="card-label">{label}</span>
      <span className="price-text">{price}</span>
      {productId === id ? (
        <Counter count={count} setCounter={setCounter} />
      ) : (
        <Button outlinePrimary onClick={() => setProductId(id)}>
          Sepete Ekle
        </Button>
      )}
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  label: PropTypes.string,
  price: PropTypes.string,
  img: PropTypes.string,
};

export default Card;
