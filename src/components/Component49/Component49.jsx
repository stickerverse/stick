/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Component40 } from "../Component40";
import "./style.css";

export const Component49 = ({
  variant,
  hover,
  className,
  component40VariantClassName,
  component40Variant = "/img/component-2-19.png",
  component40Img = "/img/component-2-21.png",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    variant: variant || "one",

    hover: hover || false,
  });

  return (
    <div
      className={`component-49 hover-35-${state.hover} variant-40-${state.variant} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      <Component40
        variant={
          state.variant === "one" && !state.hover
            ? "eight"
            : state.variant === "two" && state.hover
              ? "nine"
              : state.variant === "two" && !state.hover
                ? "ten"
                : "seven"
        }
        variant4={component40Variant}
        variant5={component40Img}
        variant7={
          state.variant === "one" && state.hover
            ? "/img/component-2-18.png"
            : undefined
        }
        variant8={
          state.variant === "two" && state.hover
            ? "/img/component-2-20.png"
            : undefined
        }
        variantClassName={component40VariantClassName}
      />
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

Component49.propTypes = {
  variant: PropTypes.oneOf(["two", "one"]),
  hover: PropTypes.bool,
  component40Variant: PropTypes.string,
  component40Img: PropTypes.string,
};
