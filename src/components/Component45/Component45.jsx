/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Component45 = ({
  text = "Update Profile",
  variant,
  className,
}) => {
  return (
    <div className={`component-45 ${className}`}>
      <div className="text-32">{text}</div>
    </div>
  );
};

Component45.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.oneOf(["one"]),
};
