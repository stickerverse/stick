/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Component16 = ({
  text = "🛸 Shipping Process",
  variant,
  className,
  to,
}) => {
  return (
    <div className={`component-16 ${className}`}>
      <div className="text-11">{text}</div>
    </div>
  );
};

Component16.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.oneOf(["one"]),
  to: PropTypes.string,
};
