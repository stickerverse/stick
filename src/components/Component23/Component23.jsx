/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const Component23 = ({
  text = "💌 Need help?",
  variant,
  hover,
  className,
  hasLinkPaints = true,
  hasText = true,
  hasOverlayShadow = true,
  linkPaintsClassName,
  textClassName,
  overlayShadowClassName,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    variant: variant || "one",

    hover: hover || false,
  });

  return (
    <div
      className={`component-23 hover-20-${state.hover} variant-19-${state.variant} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      {state.hover && (
        <>
          <div className="text-14">{text}</div>

          <div className="overlay-shadow-7" />
        </>
      )}

      {!state.hover && (
        <>
          <>
            {hasLinkPaints && (
              <div className={`link-paints-4 ${linkPaintsClassName}`} />
            )}
          </>

          <>
            {hasText && (
              <div className={`text-15 ${textClassName}`}>{text}</div>
            )}
          </>

          <>
            {hasOverlayShadow && (
              <div className={`overlay-shadow-7 ${overlayShadowClassName}`} />
            )}
          </>
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

Component23.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.oneOf(["two", "one"]),
  hover: PropTypes.bool,
  hasLinkPaints: PropTypes.bool,
  hasText: PropTypes.bool,
  hasOverlayShadow: PropTypes.bool,
};
