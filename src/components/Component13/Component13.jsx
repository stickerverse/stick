/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Component13 = ({
  variant,
  variantClassName,
  img = "/img/variant-7-3.png",
  variant1 = "/img/variant-3-3.png",
  variant2 = "/img/variant-5-3.png",
  variant3 = "/img/variant-2-3.png",
  variant4 = "/img/variant-4-3.png",
  variant5 = "/img/variant-6-3.png",
}) => {
  return (
    <>
      {variant === "one" && (
        <div className={`component-13 variant-5 ${variantClassName}`} />
      )}

      {["five", "four", "seven", "six", "three", "two"].includes(variant) && (
        <img
          className={`component-13 variant-6 variant-13-${variant} ${variantClassName}`}
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

Component13.propTypes = {
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
