/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const VariantWrapper = ({
  variant,
  className,
  img = "/img/variant-1-1.png",
  variant1 = "/img/variant-2-6.png",
  variant2 = "/img/variant-3-7.png",
  variant3 = "/img/variant-4-7.png",
}) => {
  return (
    <img
      className={`variant-wrapper variant-30-${variant} ${className}`}
      alt="Variant"
      src={
        variant === "two"
          ? variant1
          : variant === "three"
            ? variant2
            : variant === "four"
              ? variant3
              : img
      }
    />
  );
};

VariantWrapper.propTypes = {
  variant: PropTypes.oneOf(["two", "four", "three", "one"]),
  img: PropTypes.string,
  variant1: PropTypes.string,
  variant2: PropTypes.string,
  variant3: PropTypes.string,
};
