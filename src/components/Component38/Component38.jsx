/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Component30 } from "../Component30";
import "./style.css";

export const Component38 = ({
  variant,
  hover,
  className,
  component30Variant = "/img/component-2-1.png",
  component30VariantClassName,
  component30Img = "/img/component-2-3.png",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    variant: variant || "one",

    hover: hover || false,
  });

  return (
    <div
      className={`component-38 hover-29-${state.hover} variant-32-${state.variant} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      <Component30
        variant={
          state.variant === "one" && !state.hover
            ? "eight"
            : state.variant === "two" && state.hover
              ? "nine"
              : state.variant === "two" && !state.hover
                ? "ten"
                : "seven"
        }
        variant4={component30Variant}
        variant5={component30Img}
        variant7={
          state.variant === "one" && state.hover
            ? "/img/component-2.png"
            : undefined
        }
        variant8={
          state.variant === "two" && state.hover
            ? "/img/component-2-2.png"
            : undefined
        }
        variantClassName={component30VariantClassName}
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

Component38.propTypes = {
  variant: PropTypes.oneOf(["two", "one"]),
  hover: PropTypes.bool,
  component30Variant: PropTypes.string,
  component30Img: PropTypes.string,
};
