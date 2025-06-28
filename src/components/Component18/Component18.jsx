/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Component18 = ({
  variant,
  variantClassName,
  img = "/img/variant-7-4.png",
  variant1 = "/img/variant-9.png",
  variant2 = "/img/variant-3-4.png",
  variant3 = "/img/variant-12.png",
  variant4 = "/img/variant-6-4.png",
  variant5 = "/img/variant-8-1.png",
  variant6 = "/img/variant-11.png",
  variant7 = "/img/variant-2-4.png",
}) => {
  return (
    <>
      {variant === "one" && (
        <div className={`component-18 variant-7 ${variantClassName}`} />
      )}

      {(variant === "eight" ||
        variant === "eleven" ||
        variant === "five" ||
        variant === "four" ||
        variant === "nine" ||
        variant === "seven" ||
        variant === "six" ||
        variant === "ten" ||
        variant === "three" ||
        variant === "twelve" ||
        variant === "two") && (
        <img
          className={`component-18 variant-8 variant-15-${variant} ${variantClassName}`}
          alt="Variant"
          src={
            variant === "three"
              ? variant2
              : variant === "four"
                ? "/img/variant-4-4.png"
                : variant === "five"
                  ? "/img/variant-5-4.png"
                  : variant === "six"
                    ? variant4
                    : variant === "seven"
                      ? img
                      : variant === "eight"
                        ? variant5
                        : variant === "nine"
                          ? variant1
                          : variant === "ten"
                            ? "/img/variant-10.png"
                            : variant === "eleven"
                              ? variant6
                              : variant === "twelve"
                                ? variant3
                                : variant7
          }
        />
      )}
    </>
  );
};

Component18.propTypes = {
  variant: PropTypes.oneOf([
    "seven",
    "two",
    "ten",
    "twelve",
    "three",
    "nine",
    "four",
    "eleven",
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
};
