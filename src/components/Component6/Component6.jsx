/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Component6 = ({
  text = "🛸 Shipping Process",
  variant,
  className,
  textClassName,
}) => {
  return (
    <div className={`component-6 ${className}`}>
      <div className={`text-4 ${textClassName}`}>{text}</div>
    </div>
  );
};

Component6.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.oneOf(["one"]),
};
