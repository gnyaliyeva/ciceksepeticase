import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import _ from "lodash";

import Button from "../../components/Button";
import Counter from "../../components/Counter";

import "./style.scss";

const Card = ({
  id,
  title,
  label,
  price,
  img,
  selectedProducts,
  setSelectedProducts,
}) => {
  const [productId, setProductId] = useState(null);
  const [count, setCounter] = useState(0);

  useEffect(() => {
    const index = _.findIndex(
      selectedProducts,
      (product) => product.id === productId
    );
    if (index !== -1) {
      selectedProducts[index].count = count;
      selectedProducts[index].fee = count * price;
    }
    setSelectedProducts([...selectedProducts]);
  }, [count, productId, price, setSelectedProducts]);

  return (
    <div className="card-container">
      <img src={img} alt="ciceksepeti-market-urun" />
      <span className="card-title">{title}</span>
      <span className="card-label">{label}</span>
      <span className="price-text">{price} TL</span>
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
  price: PropTypes.number,
  img: PropTypes.string,
  selectedProducts: PropTypes.array,
  setSelectedProducts: PropTypes.func,
};

export default Card;
