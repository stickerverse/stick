/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Component30 } from "../Component30";
import "./style.css";

export const Component31 = ({
  text = "100\nitems",
  variant,
  hover,
  className,
  component30Variant = "/img/component-2-11.png",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    variant: variant || "one",

    hover: hover || false,
  });

  return (
    <div
      className={`component-31 hover-26-${state.hover} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      <Component30
        img={component30Variant}
        variant={!state.hover ? "two" : "one"}
        variant6={state.hover ? "/img/component-2-10.png" : undefined}
        variantClassName={`${!state.hover ? "class-15" : "class-16"}`}
      />
      <div className="container-2">
        <div className="text-20">{text}</div>
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

Component31.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.oneOf(["one"]),
  hover: PropTypes.bool,
  component30Variant: PropTypes.string,
};
