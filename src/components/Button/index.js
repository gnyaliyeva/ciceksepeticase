import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { omit } from "lodash";

import "./style.scss";

const Button = (props) => {
  const {
    children,
    className,
    block,
    primary,
    outlinePrimary,
    secondary,
    outlineSecondary,
    disabled,
  } = props;
  const buttonProps = omit(props, "children", "className");
  const buttonClasses = classNames("button", className, {
    "button-block": block,
    "button-primary": primary,
    "button-outline-primary": outlinePrimary,
    "button-secondary": secondary,
    "button-secondary-primary": outlineSecondary,
    "button-disabled": disabled,
  });
  return (
    <button {...buttonProps} className={buttonClasses}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  block: PropTypes.bool,
  primary: PropTypes.bool,
  outlinePrimary: PropTypes.bool,
  transparent: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;
