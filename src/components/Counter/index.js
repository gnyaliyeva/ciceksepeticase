import React from "react";
import PropTypes from "prop-types";

import Button from "../Button";

import "./style.scss";

const Counter = ({ count, setCounter }) => {
  return (
    <div className="counter-wrapper">
      <Button onClick={() => setCounter(count - 1)}>
        <i className="minus">-</i>
      </Button>
      <span className="text-count">{count}</span>
      <Button
        onClick={() => setCounter(count + 1)}
      >
        <i className="plus">+</i>
      </Button>
    </div>
  );
};

Counter.propTypes = {
  count: PropTypes.number,
  setCounter: PropTypes.func,
};

export default Counter;
