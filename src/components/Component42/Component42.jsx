/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Component40 } from "../Component40";
import { ImgWrapper } from "../ImgWrapper";
import "./style.css";

export const Component42 = ({
  text = "Homebase",
  variant,
  hover,
  className,
  imgWrapperVariant = "/img/component-4-8.png",
  component40Variant = "/img/component-2-22.png",
  component40Img = "/img/component-2-24.png",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    variant: variant || "one",

    hover: hover || false,
  });

  return (
    <div
      className={`component-42 hover-34-${state.hover} variant-37-${state.variant} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      <div className="container-10">
        <div className="text-29">{text}</div>
      </div>

      <div className="margin-5">
        <div className="container-11">
          {state.variant === "one" && (
            <div className="container-12">
              <ImgWrapper
                className="component-7"
                img={imgWrapperVariant}
                variant="one"
              />
            </div>
          )}

          {["three", "two"].includes(state.variant) && (
            <Component40
              variant={state.variant === "three" ? "five" : "three"}
              variant1={component40Variant}
              variant3={component40Img}
              variantClassName="component-13"
            />
          )}
        </div>
      </div>
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

Component42.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.oneOf(["two", "three", "one"]),
  hover: PropTypes.bool,
  imgWrapperVariant: PropTypes.string,
  component40Variant: PropTypes.string,
  component40Img: PropTypes.string,
};
