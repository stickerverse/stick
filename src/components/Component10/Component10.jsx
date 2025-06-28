/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const Component10 = ({
  text = "Continue shopping",
  variant,
  hover,
  className,
  linkPaintsClassName,
  textClassName,
  to,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    variant: variant || "one",

    hover: hover || false,
  });

  return (
    <div
      className={`component-10 hover-10-${state.hover} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      {state.hover && (
        <>
          <div className="text-5">{text}</div>

          <div className="overlay-shadow-3" />
        </>
      )}

      {!state.hover && (
        <>
          <div className={`link-paints-2 ${linkPaintsClassName}`} />

          <div className={`text-6 ${textClassName}`}>{text}</div>

          <Link className="overlay-shadow-4" to={to} />
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

Component10.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.oneOf(["one"]),
  hover: PropTypes.bool,
  to: PropTypes.string,
};
