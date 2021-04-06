import classNames from "classnames";
import React from "react";

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

export default Button;
