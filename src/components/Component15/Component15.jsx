/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const Component15 = ({
  text = "Sign in",
  variant,
  hover,
  className,
  buttonPaintsClassName,
  textClassName,
  overlayShadowClassName,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    variant: variant || "one",

    hover: hover || false,
  });

  return (
    <div
      className={`component-15 hover-14-${state.hover} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      {state.hover && (
        <>
          <div className="text-9">{text}</div>

          <div className="overlay-shadow-5" />
        </>
      )}

      {!state.hover && (
        <>
          <div className={`button-paints ${buttonPaintsClassName}`} />

          <div className={`text-10 ${textClassName}`}>{text}</div>

          <div className={`overlay-shadow-5 ${overlayShadowClassName}`} />
        </>
      )}
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

Component15.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.oneOf(["one"]),
  hover: PropTypes.bool,
};
