/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Component25 = ({
  text = "💸 Profit Margin Calculator",
  variant,
  className,
}) => {
  return (
    <div className={`component-25 ${className}`}>
      <div className={`text-17 variant-20-${variant}`}>{text}</div>
    </div>
  );
};

Component25.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.oneOf(["two", "one"]),
};
