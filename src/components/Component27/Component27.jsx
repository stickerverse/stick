/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Component26 } from "../Component26";
import "./style.css";

export const Component27 = ({
  variant,
  hover,
  className,
  component26VariantClassName,
  component26Variant = "/img/component-1-63.png",
  component26Img = "/img/component-1-58.png",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    variant: variant || "one",

    hover: hover || false,
  });

  return (
    <div
      className={`component-27 hover-21-${state.hover} variant-26-${state.variant} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      <Component26
        img={component26Variant}
        variant={
          state.variant === "one" && !state.hover
            ? "four"
            : state.variant === "two" && state.hover
              ? "five"
              : state.variant === "two" && !state.hover
                ? "six"
                : "three"
        }
        variant1={component26Img}
        variant3={
          state.variant === "one" && state.hover
            ? "/img/component-1-62.png"
            : undefined
        }
        variant4={
          state.variant === "two" && state.hover
            ? "/img/component-1-57.png"
            : undefined
        }
        variantClassName={component26VariantClassName}
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

Component27.propTypes = {
  variant: PropTypes.oneOf(["two", "one"]),
  hover: PropTypes.bool,
  component26Variant: PropTypes.string,
  component26Img: PropTypes.string,
};
