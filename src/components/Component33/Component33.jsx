/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Component30 } from "../Component30";
import "./style.css";

export const Component33 = ({
  text = "Orders",
  variant,
  hover,
  className,
  component30Variant = "/img/component-2-5.png",
  component30Img = "/img/component-2-7.png",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    variant: variant || "one",

    hover: hover || false,
  });

  return (
    <div
      className={`component-33 hover-28-${state.hover} variant-31-${state.variant} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      <div className="container-4">
        <div className="text-22">{text}</div>
      </div>

      <div className="margin-2">
        <div className="component-2-wrapper">
          <Component30
            variant={state.variant === "two" ? "five" : "three"}
            variant1={component30Variant}
            variant3={component30Img}
            variantClassName="component-2-instance"
          />
        </div>
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

Component33.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.oneOf(["two", "one"]),
  hover: PropTypes.bool,
  component30Variant: PropTypes.string,
  component30Img: PropTypes.string,
};
