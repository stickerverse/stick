/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ImgWrapper } from "../ImgWrapper";
import "./style.css";

export const Component43 = ({
  text = "Profile",
  variant,
  className,
  imgWrapperVariant = "/img/component-4-10.png",
}) => {
  return (
    <div className={`component-43 ${className}`}>
      <div className="container-13">
        <div className="text-30">{text}</div>
      </div>

      <div className="rectangle-2" />

      <div className="margin-6">
        <div className="container-14">
          <div className="container-15">
            <div className="container-16">
              <ImgWrapper
                className="component-18"
                variant="two"
                variant1={imgWrapperVariant}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Component43.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.oneOf(["one"]),
  imgWrapperVariant: PropTypes.string,
};
