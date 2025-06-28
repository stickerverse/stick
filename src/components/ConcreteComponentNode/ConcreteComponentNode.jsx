/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ConcreteComponentNode = ({
  variant,
  variantClassName,
  img = "/img/variant-7-1.png",
  variant1 = "/img/variant-3-1.png",
  variant2 = "/img/variant-5-1.png",
  variant3 = "/img/variant-2-1.png",
  variant4 = "/img/variant-4-1.png",
  variant5 = "/img/variant-6-1.png",
}) => {
  return (
    <>
      {variant === "one" && (
        <div className={`concrete-component-node div ${variantClassName}`} />
      )}

      {["five", "four", "seven", "six", "three", "two"].includes(variant) && (
        <img
          className={`concrete-component-node variant-2 variant-2-${variant} ${variantClassName}`}
          alt="Variant"
          src={
            variant === "three"
              ? variant1
              : variant === "four"
                ? variant4
                : variant === "five"
                  ? variant2
                  : variant === "six"
                    ? variant5
                    : variant === "seven"
                      ? img
                      : variant3
          }
        />
      )}
    </>
  );
};

ConcreteComponentNode.propTypes = {
  variant: PropTypes.oneOf([
    "seven",
    "two",
    "three",
    "four",
    "one",
    "five",
    "six",
  ]),
  img: PropTypes.string,
  variant1: PropTypes.string,
  variant2: PropTypes.string,
  variant3: PropTypes.string,
  variant4: PropTypes.string,
  variant5: PropTypes.string,
};
