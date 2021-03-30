import React from "react";
import classNames from "classnames";

import Button from "../../components/Button";
import { images } from "./images";
import "./style.scss";

const Card = ({ imgName, buttonTxt, text, backGround }) => {
  const classes = classNames("card-container", backGround);

  return (
    <div className={classes}>
      <img src={images[imgName]} alt="ciceksepeti" />
      <div className="card-text-wrapper">
        <span className="card-text__info">{text}</span>
        <Button primary>{buttonTxt}</Button>
      </div>
    </div>
  );
};

export default Card;
