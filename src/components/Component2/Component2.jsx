/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const Component2 = ({
  text = "Go →",
  variant,
  hover,
  className,
  linkPaintsClassName,
  overlayShadowClassName,
  to,
  to1,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    variant: variant || "one",

    hover: hover || false,
  });

  return (
    <Link
      className={`component-2 hover-4-${state.hover} variant-3-${state.variant} ${className}`}
      to={to1}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      {!state.hover && <div className={`link-paints ${linkPaintsClassName}`} />}

      <div className="text-wrapper">{text}</div>

      {!state.hover && (
        <Link className={`overlay-shadow ${overlayShadowClassName}`} to={to} />
      )}

      {state.hover && <div className="overlay-shadow-2" />}
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

Component2.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.oneOf(["two", "three", "one"]),
  hover: PropTypes.bool,
  to: PropTypes.string,
  to1: PropTypes.string,
};
