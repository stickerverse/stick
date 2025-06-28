/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Link } from "react-router-dom";
import { Component13 } from "../Component13";
import "./style.css";

export const Component14 = ({
  variant,
  hover,
  className,
  component13Variant = "/img/component-1-35.png",
  component13Img = "/img/component-1-31.png",
  component13Variant1 = "/img/component-1-33.png",
  to,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    variant: variant || "one",

    hover: hover || false,
  });

  return (
    <Link
      className={`component-14 hover-13-${state.hover} variant-14-${state.variant} ${className}`}
      to={to}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      <Component13
        img={component13Variant}
        variant={
          state.variant === "one" && !state.hover
            ? "three"
            : state.variant === "two" && state.hover
              ? "four"
              : state.variant === "two" && !state.hover
                ? "five"
                : state.variant === "three" && state.hover
                  ? "six"
                  : state.variant === "three" && !state.hover
                    ? "seven"
                    : "two"
        }
        variant1={component13Img}
        variant2={component13Variant1}
        variant3={
          state.variant === "one" && state.hover
            ? "/img/component-1-30.png"
            : undefined
        }
        variant4={
          state.variant === "two" && state.hover
            ? "/img/component-1-32.png"
            : undefined
        }
        variant5={
          state.variant === "three" && state.hover
            ? "/img/component-1-34.png"
            : undefined
        }
        variantClassName={`${!state.hover ? "class-9" : (state.variant === "two" && state.hover) ? "class-10" : state.variant === "three" && state.hover ? "class-11" : "class-12"}`}
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

Component14.propTypes = {
  variant: PropTypes.oneOf(["two", "three", "one"]),
  hover: PropTypes.bool,
  component13Variant: PropTypes.string,
  component13Img: PropTypes.string,
  component13Variant1: PropTypes.string,
  to: PropTypes.string,
};
