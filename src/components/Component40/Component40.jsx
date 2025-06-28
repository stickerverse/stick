/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Component40 = ({
  variant,
  variantClassName,
  img = "/img/variant-2-7.png",
  variant1 = "/img/variant-3-8.png",
  variant2 = "/img/variant-4-8.png",
  variant3 = "/img/variant-5-7.png",
  variant4 = "/img/variant-8-4.png",
  variant5 = "/img/variant-10-2.png",
  variant6 = "/img/variant-1-2.png",
  variant7 = "/img/variant-7-7.png",
  variant8 = "/img/variant-9-2.png",
}) => {
  return (
    <>
      {(variant === "eight" ||
        variant === "five" ||
        variant === "four" ||
        variant === "nine" ||
        variant === "one" ||
        variant === "seven" ||
        variant === "ten" ||
        variant === "three" ||
        variant === "two") && (
        <img
          className={`component-40 variant-12 variant-35-${variant} ${variantClassName}`}
          alt="Variant"
          src={
            variant === "two"
              ? img
              : variant === "three"
                ? variant1
                : variant === "four"
                  ? variant2
                  : variant === "five"
                    ? variant3
                    : variant === "seven"
                      ? variant7
                      : variant === "eight"
                        ? variant4
                        : variant === "nine"
                          ? variant8
                          : variant === "ten"
                            ? variant5
                            : variant6
          }
        />
      )}

      {variant === "six" && (
        <div className={`component-40 variant-13 ${variantClassName}`} />
      )}
    </>
  );
};

Component40.propTypes = {
  variant: PropTypes.oneOf([
    "seven",
    "two",
    "ten",
    "three",
    "nine",
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
  variant6: PropTypes.string,
  variant7: PropTypes.string,
  variant8: PropTypes.string,
};
