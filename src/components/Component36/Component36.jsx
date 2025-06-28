/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Component36 = ({
  text = "Update Profile",
  variant,
  className,
}) => {
  return (
    <div className={`component-36 ${className}`}>
      <div className="text-25">{text}</div>
    </div>
  );
};

Component36.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.oneOf(["one"]),
};
