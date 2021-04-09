import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const Button = ({ outline, children, className }) => {
  return (
    <button
      className={classNames("button", className, {
        "button--outline": outline,
      })}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
