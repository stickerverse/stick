/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const Component20 = ({
  text = "Start Here →",
  variant,
  hover,
  className,
  linkPaintsClassName,
  hasOverlayShadow = true,
  to,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    variant: variant || "one",

    hover: hover || false,
  });

  return (
    <Link
      className={`component-20 hover-16-${state.hover} ${className}`}
      to={to}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      {!state.hover && (
        <div className={`link-paints-3 ${linkPaintsClassName}`} />
      )}

      <div className="text-wrapper-2">Start Here →</div>

      {!state.hover && (
        <>
          <>{hasOverlayShadow && <div className="overlay-shadow-6" />}</>
        </>
      )}

      {state.hover && <div className="overlay-shadow-6" />}
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

Component20.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.oneOf(["one"]),
  hover: PropTypes.bool,
  hasOverlayShadow: PropTypes.bool,
  to: PropTypes.string,
};
