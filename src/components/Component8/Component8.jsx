/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const Component8 = ({
  text = " Deals",
  variant,
  hover,
  className,
  textClassName,
  to,
  to1,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    variant: variant || "one",

    hover: hover || false,
  });

  return (
    <Link
      className={`component-8 hover-2-${state.hover} variant-0-${state.variant} ${className}`}
      to={to1}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      <Link className={`deals ${textClassName}`} to={to}>
        {state.variant === "one" && state.hover && <> Deals</>}

        {(!state.hover || state.variant === "two") && <>{text}</>}
      </Link>
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

Component8.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.oneOf(["two", "one"]),
  hover: PropTypes.bool,
  to: PropTypes.string,
  to1: PropTypes.string,
};
