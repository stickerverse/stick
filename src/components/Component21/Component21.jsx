/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Link } from "react-router-dom";
import { Component18 } from "../Component18";
import "./style.css";

export const Component21 = ({
  text = "Vinyl Stickers",
  variant,
  hover,
  className,
  component18VariantClassName,
  component18Variant = "/img/component-1-44.png",
  to,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    variant: variant || "one",

    hover: hover || false,
  });

  return (
    <div
      className={`component-21 ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      <Link className="text-13" to={to}>
        {text}
      </Link>

      <div className="container">
        <Component18
          variant={!state.hover ? "three" : "two"}
          variant2={component18Variant}
          variant7={state.hover ? "/img/component-1-43.png" : undefined}
          variantClassName={component18VariantClassName}
        />
      </div>
    </div>
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

Component21.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.oneOf(["one"]),
  hover: PropTypes.bool,
  component18Variant: PropTypes.string,
  to: PropTypes.string,
};
