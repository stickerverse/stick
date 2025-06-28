/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ImgWrapper = ({
  variant,
  className,
  img = "/img/variant-1-3.png",
  variant1 = "/img/variant-2-8.png",
  variant2 = "/img/variant-3-9.png",
  variant3 = "/img/variant-4-9.png",
  variant4 = "/img/variant-5-8.png",
}) => {
  return (
    <img
      className={`img-wrapper variant-36-${variant} ${className}`}
      alt="Variant"
      src={
        variant === "two"
          ? variant1
          : variant === "three"
            ? variant2
            : variant === "four"
              ? variant3
              : variant === "five"
                ? variant4
                : img
      }
    />
  );
};

ImgWrapper.propTypes = {
  variant: PropTypes.oneOf(["two", "three", "four", "one", "five"]),
  img: PropTypes.string,
  variant1: PropTypes.string,
  variant2: PropTypes.string,
  variant3: PropTypes.string,
  variant4: PropTypes.string,
};
