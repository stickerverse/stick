/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Link } from "react-router-dom";
import { Component1 } from "../Component1";
import "./style.css";

export const VariantHoverTrueWrapper = ({
  variant,
  hover,
  className,
  component1Variant = "/img/component-1-1.png",
  component1VariantClassName,
  component1Img = "/img/component-1-3.png",
  component1Variant1 = "/img/component-1-5.png",
  to,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    variant: variant || "one",

    hover: hover || false,
  });

  return (
    <Link
      className={`variant-hover-true-wrapper hover-1-${state.hover} variant-${state.variant} ${className}`}
      to={to}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      <Component1
        img={component1Variant}
        variant={
          state.variant === "one" && !state.hover
            ? "three"
            : state.variant === "two" && state.hover
              ? "four"
              : state.variant === "two" && !state.hover
                ? "five"
                : state.variant === "three" && state.hover
                  ? "seven"
                  : state.variant === "three" && !state.hover
                    ? "eight"
                    : "two"
        }
        variant1={component1Img}
        variant2={component1Variant1}
        variant3={
          state.variant === "one" && state.hover
            ? "/img/component-1.png"
            : undefined
        }
        variant4={
          state.variant === "two" && state.hover
            ? "/img/component-1-2.png"
            : undefined
        }
        variant5={
          state.variant === "three" && state.hover
            ? "/img/component-1-4.png"
            : undefined
        }
        variantClassName={component1VariantClassName}
      />
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

VariantHoverTrueWrapper.propTypes = {
  variant: PropTypes.oneOf(["two", "three", "one"]),
  hover: PropTypes.bool,
  component1Variant: PropTypes.string,
  component1Img: PropTypes.string,
  component1Variant1: PropTypes.string,
  to: PropTypes.string,
};
