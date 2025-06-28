/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Component47 = ({
  text = "Email me with news and offers",
  variant,
  className,
}) => {
  return (
    <div className={`component-47 ${className}`}>
      <div className="background" />

      <p className="text-34">{text}</p>
    </div>
  );
};

Component47.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.oneOf(["one"]),
};
