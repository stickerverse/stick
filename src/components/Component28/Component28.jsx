/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Component26 } from "../Component26";
import "./style.css";

export const Component28 = ({
  text = "100\nitems",
  variant,
  hover,
  className,
  component26Variant = "/img/component-1-56.png",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    variant: variant || "one",

    hover: hover || false,
  });

  return (
    <div
      className={`component-28 hover-22-${state.hover} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      <Component26
        variant={!state.hover ? "eight" : "seven"}
        variant2={component26Variant}
        variant5={state.hover ? "/img/component-1-55.png" : undefined}
        variantClassName={`${!state.hover ? "class-13" : "class-14"}`}
      />
      <div className="div-wrapper">
        <div className="text-18">{text}</div>
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

Component28.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.oneOf(["one"]),
  hover: PropTypes.bool,
  component26Variant: PropTypes.string,
};
