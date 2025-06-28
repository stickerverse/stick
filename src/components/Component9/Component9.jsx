/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Component7 } from "../Component7";
import "./style.css";

export const Component9 = ({
  variant,
  hover,
  className,
  component7Variant = "/img/component-1-23.png",
  component7Img = "/img/component-1-19.png",
  component7Variant1 = "/img/component-1-21.png",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    variant: variant || "one",

    hover: hover || false,
  });

  return (
    <div
      className={`component-9 hover-9-${state.hover} variant-10-${state.variant} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      <Component7
        img={component7Variant}
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
        variant1={component7Img}
        variant2={component7Variant1}
        variant3={
          state.variant === "one" && state.hover
            ? "/img/component-1-18.png"
            : undefined
        }
        variant4={
          state.variant === "two" && state.hover
            ? "/img/component-1-20.png"
            : undefined
        }
        variant5={
          state.variant === "three" && state.hover
            ? "/img/component-1-22.png"
            : undefined
        }
        variantClassName={`${!state.hover ? "class-5" : (state.variant === "two" && state.hover) ? "class-6" : state.variant === "three" && state.hover ? "class-7" : "class-8"}`}
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

Component9.propTypes = {
  variant: PropTypes.oneOf(["two", "three", "one"]),
  hover: PropTypes.bool,
  component7Variant: PropTypes.string,
  component7Img: PropTypes.string,
  component7Variant1: PropTypes.string,
};
