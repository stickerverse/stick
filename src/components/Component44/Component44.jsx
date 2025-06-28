/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Component40 } from "../Component40";
import "./style.css";

export const Component44 = ({
  text = "Logout",
  variant,
  className,
  component40Variant = "/img/component-2-26.png",
}) => {
  return (
    <div className={`component-44 ${className}`}>
      <div className="container-17">
        <div className="text-31">{text}</div>
      </div>

      <div className="margin-7">
        <div className="container-18">
          <Component40
            variant="four"
            variant2={component40Variant}
            variantClassName="component-26"
          />
        </div>
      </div>
    </div>
  );
};

Component44.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.oneOf(["one"]),
  component40Variant: PropTypes.string,
};
