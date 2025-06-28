/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { VariantWrapper } from "../VariantWrapper";
import "./style.css";

export const Component34 = ({
  text = "Profile",
  variant,
  className,
  variantWrapperVariant = "/img/component-4-1.png",
}) => {
  return (
    <div className={`component-34 ${className}`}>
      <div className="container-5">
        <div className="text-23">{text}</div>
      </div>

      <div className="margin-3">
        <div className="container-6">
          <div className="container-7">
            <div className="component-4-wrapper">
              <VariantWrapper
                className="component-4-instance"
                variant="two"
                variant1={variantWrapperVariant}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Component34.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.oneOf(["one"]),
  variantWrapperVariant: PropTypes.string,
};
