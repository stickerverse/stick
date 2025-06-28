/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Component48 = ({
  text = "🛸 Shipping Process",
  variant,
  className,
  to,
}) => {
  return (
    <div className={`component-48 ${className}`}>
      <div className="text-35">{text}</div>
    </div>
  );
};

Component48.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.oneOf(["one"]),
  to: PropTypes.string,
};
