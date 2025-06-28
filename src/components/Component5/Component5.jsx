/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Component5 = ({
  text = " Deals",
  variant,
  className,
  textClassName,
}) => {
  return (
    <div className={`component-5 ${className}`}>
      <div className={`text-2 ${textClassName}`}>{text}</div>
    </div>
  );
};

Component5.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.oneOf(["two", "one"]),
};
