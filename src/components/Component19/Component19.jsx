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

export const Component19 = ({
  variant,
  hover,
  className,
  component18Variant = "/img/component-1-53.png",
  component18VariantClassName,
  component18Img = "/img/component-1-40.png",
  component18Variant1 = "/img/component-1-42.png",
  to,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    variant: variant || "one",

    hover: hover || false,
  });

  return (
    <Link
      className={`component-19 hover-15-${state.hover} variant-16-${state.variant} ${className}`}
      to={to}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      <Component18
        img={component18Variant}
        variant={
          state.variant === "one" && !state.hover
            ? "seven"
            : state.variant === "two" && state.hover
              ? "eight"
              : state.variant === "two" && !state.hover
                ? "nine"
                : state.variant === "three" && state.hover
                  ? "eleven"
                  : state.variant === "three" && !state.hover
                    ? "twelve"
                    : "six"
        }
        variant1={component18Img}
        variant3={component18Variant1}
        variant4={
          state.variant === "one" && state.hover
            ? "/img/component-1-52.png"
            : undefined
        }
        variant5={
          state.variant === "two" && state.hover
            ? "/img/component-1-39.png"
            : undefined
        }
        variant6={
          state.variant === "three" && state.hover
            ? "/img/component-1-41.png"
            : undefined
        }
        variantClassName={component18VariantClassName}
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

Component19.propTypes = {
  variant: PropTypes.oneOf(["two", "three", "one"]),
  hover: PropTypes.bool,
  component18Variant: PropTypes.string,
  component18Img: PropTypes.string,
  component18Variant1: PropTypes.string,
  to: PropTypes.string,
};
