/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Component30 } from "../Component30";
import "./style.css";

export const Component35 = ({
  text = "Logout",
  variant,
  className,
  component30Variant = "/img/component-2-8.png",
}) => {
  return (
    <div className={`component-35 ${className}`}>
      <div className="container-8">
        <div className="text-24">{text}</div>
      </div>

      <div className="margin-4">
        <div className="component-instance-wrapper">
          <Component30
            variant="four"
            variant2={component30Variant}
            variantClassName="instance-node"
          />
        </div>
      </div>
    </div>
  );
};

Component35.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.oneOf(["one"]),
  component30Variant: PropTypes.string,
};
