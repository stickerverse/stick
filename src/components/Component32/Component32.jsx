/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { VariantWrapper } from "../VariantWrapper";
import "./style.css";

export const Component32 = ({
  text = "Homebase",
  variant,
  className,
  variantWrapperVariant = "/img/component-4-2.png",
}) => {
  return (
    <div className={`component-32 ${className}`}>
      <div className="container-3">
        <div className="text-21">{text}</div>
      </div>

      <div className="rectangle" />

      <div className="margin">
        <div className="container-wrapper">
          <div className="component-wrapper">
            <VariantWrapper
              className="component-instance"
              img={variantWrapperVariant}
              variant="one"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Component32.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.oneOf(["one"]),
  variantWrapperVariant: PropTypes.string,
};
