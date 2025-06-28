/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Component40 } from "../Component40";
import "./style.css";

export const Component41 = ({
  text = "100\nitems",
  variant,
  hover,
  className,
  component40Variant = "/img/component-2-29.png",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    variant: variant || "one",

    hover: hover || false,
  });

  return (
    <div
      className={`component-41 hover-32-${state.hover} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      <Component40
        img={component40Variant}
        variant={!state.hover ? "two" : "one"}
        variant6={state.hover ? "/img/component-2-28.png" : undefined}
        variantClassName={`${!state.hover ? "class-17" : "class-18"}`}
      />
      <div className="container-9">
        <div className="text-28">{text}</div>
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

Component41.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.oneOf(["one"]),
  hover: PropTypes.bool,
  component40Variant: PropTypes.string,
};
