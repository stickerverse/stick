/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Component46 = ({ text = "Save Details", variant, className }) => {
  return (
    <div className={`component-46 ${className}`}>
      <div className="text-33">{text}</div>
    </div>
  );
};

Component46.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.oneOf(["one"]),
};
