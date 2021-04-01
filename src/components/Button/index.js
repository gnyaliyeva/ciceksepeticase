import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { omit } from "lodash";

import "./style.scss";

const Button = (props) => {
  const {
    children,
    className,
    primary,
    outlinePrimary,
    secondary,
    outlineSecondary,
    onClick
  } = props;
  const buttonProps = omit(
    props,
    'children',
    'primary',
    'outlinePrimary',
    'secondary',
    'outlineSecondary',
  );;
  const buttonClasses = classNames("button", className, {
    "button-primary": primary,
    "button-outline-primary": outlinePrimary,
    "button-secondary": secondary,
    "button-secondary-primary": outlineSecondary,
  });

  return (
    <button {...buttonProps} className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  outlinePrimary: PropTypes.bool,
  outlineSecondary: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
