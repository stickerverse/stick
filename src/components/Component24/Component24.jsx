/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Component24 = ({
  text = "click here.",
  variant,
  className,
  textClassName,
  to,
}) => {
  return (
    <div className={`component-24 variant-22-${variant} ${className}`}>
      <div className={`text-16 ${textClassName}`}>{text}</div>
    </div>
  );
};

Component24.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.oneOf(["two", "three", "one"]),
  to: PropTypes.string,
};
