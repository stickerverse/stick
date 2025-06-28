/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Link } from "react-router-dom";
import { ConcreteComponentNode } from "../ConcreteComponentNode";
import "./style.css";

export const Component4 = ({
  variant,
  hover,
  className,
  concreteComponentNodeVariant = "/img/component-1-14.png",
  concreteComponentNodeImg = "/img/component-1-10.png",
  concreteComponentNodeVariant1 = "/img/component-1-12.png",
  to,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    variant: variant || "one",

    hover: hover || false,
  });

  return (
    <Link
      className={`component-4 hover-8-${state.hover} variant-8-${state.variant} ${className}`}
      to={to}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      <ConcreteComponentNode
        img={concreteComponentNodeVariant}
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
        variant1={concreteComponentNodeImg}
        variant2={concreteComponentNodeVariant1}
        variant3={
          state.variant === "one" && state.hover
            ? "/img/component-1-9.png"
            : undefined
        }
        variant4={
          state.variant === "two" && state.hover
            ? "/img/component-1-11.png"
            : undefined
        }
        variant5={
          state.variant === "three" && state.hover
            ? "/img/component-1-13.png"
            : undefined
        }
        variantClassName={`${!state.hover ? "class" : (state.variant === "two" && state.hover) ? "class-2" : state.variant === "three" && state.hover ? "class-3" : "class-4"}`}
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

Component4.propTypes = {
  variant: PropTypes.oneOf(["two", "three", "one"]),
  hover: PropTypes.bool,
  concreteComponentNodeVariant: PropTypes.string,
  concreteComponentNodeImg: PropTypes.string,
  concreteComponentNodeVariant1: PropTypes.string,
  to: PropTypes.string,
};
