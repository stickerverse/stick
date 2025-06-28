/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const Component22 = ({
  text = "Order your stickers today →",
  variant,
  hover,
  className,
  textClassName,
  to,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    variant: variant || "one",

    hover: hover || false,
  });

  return (
    <Link
      className={`component-22 variant-17-${state.variant} hover-18-${state.hover} ${className}`}
      to={to}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      <p className={`p ${textClassName}`}>{text}</p>
    </Link>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        hover: true,
      };

    case "mouse_leave":
      return {
        ...state,
        hover: false,
      };
  }

  return state;
}

Component22.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.oneOf(["two", "three", "one"]),
  hover: PropTypes.bool,
  to: PropTypes.string,
};
