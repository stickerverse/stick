/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Component1 = ({
  variant,
  variantClassName,
  img = "/img/variant-3.png",
  variant1 = "/img/variant-5.png",
  variant2 = "/img/variant-8.png",
  variant3 = "/img/variant-2.png",
  variant4 = "/img/variant-4.png",
  variant5 = "/img/variant-7.png",
}) => {
  return (
    <>
      {variant === "one" && (
        <div className={`component-1 variant ${variantClassName}`} />
      )}

      {(variant === "eight" ||
        variant === "five" ||
        variant === "four" ||
        variant === "seven" ||
        variant === "six" ||
        variant === "three" ||
        variant === "two") && (
        <img
          className={`component-1 img ${variant} ${variantClassName}`}
          alt="Variant"
          src={
            variant === "three"
              ? img
              : variant === "four"
                ? variant4
                : variant === "five"
                  ? variant1
                  : variant === "six"
                    ? "/img/variant-6.png"
                    : variant === "seven"
                      ? variant5
                      : variant === "eight"
                        ? variant2
                        : variant3
          }
        />
      )}
    </>
  );
};

Component1.propTypes = {
  variant: PropTypes.oneOf([
    "seven",
    "two",
    "three",
    "four",
    "one",
    "five",
    "eight",
    "six",
  ]),
  img: PropTypes.string,
  variant1: PropTypes.string,
  variant2: PropTypes.string,
  variant3: PropTypes.string,
  variant4: PropTypes.string,
  variant5: PropTypes.string,
};
