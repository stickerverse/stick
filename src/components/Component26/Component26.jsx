/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Component26 = ({
  variant,
  variantClassName,
  img = "/img/variant-4-5.png",
  variant1 = "/img/variant-6-5.png",
  variant2 = "/img/variant-8-2.png",
  variant3 = "/img/variant-3-5.png",
  variant4 = "/img/variant-5-5.png",
  variant5 = "/img/variant-7-5.png",
}) => {
  return (
    <>
      {["one", "two"].includes(variant) && (
        <div
          className={`component-26 variant-24-${variant} ${variantClassName}`}
        >
          {variant === "two" && (
            <div className="overlap">
              <img className="vector" alt="Vector" src="/img/vector.png" />

              <img className="vector-2" alt="Vector" src="/img/vector-1.png" />

              <div className="group">
                <div className="overlap-group">
                  <img
                    className="vector-3"
                    alt="Vector"
                    src="/img/vector-4.png"
                  />

                  <img
                    className="vector-4"
                    alt="Vector"
                    src="/img/vector-5.png"
                  />

                  <img
                    className="vector-5"
                    alt="Vector"
                    src="/img/vector-6.png"
                  />

                  <img
                    className="vector-6"
                    alt="Vector"
                    src="/img/vector-7.png"
                  />

                  <img
                    className="vector-7"
                    alt="Vector"
                    src="/img/vector-8.png"
                  />

                  <img
                    className="vector-8"
                    alt="Vector"
                    src="/img/vector-9.png"
                  />

                  <img
                    className="vector-9"
                    alt="Vector"
                    src="/img/vector-10.png"
                  />

                  <img
                    className="vector-10"
                    alt="Vector"
                    src="/img/vector-11.png"
                  />

                  <img
                    className="vector-11"
                    alt="Vector"
                    src="/img/vector-12.png"
                  />

                  <img
                    className="vector-12"
                    alt="Vector"
                    src="/img/vector-13.png"
                  />

                  <img
                    className="vector-13"
                    alt="Vector"
                    src="/img/vector-14.png"
                  />

                  <img
                    className="vector-14"
                    alt="Vector"
                    src="/img/vector-15.png"
                  />

                  <img
                    className="vector-15"
                    alt="Vector"
                    src="/img/vector-16.png"
                  />

                  <img
                    className="vector-16"
                    alt="Vector"
                    src="/img/vector-17.png"
                  />

                  <img
                    className="vector-17"
                    alt="Vector"
                    src="/img/vector-18.png"
                  />

                  <img
                    className="vector-18"
                    alt="Vector"
                    src="/img/vector-19.png"
                  />

                  <div className="overlap-group-wrapper">
                    <div className="overlap-group-2">
                      <img
                        className="group-2"
                        alt="Group"
                        src="/img/group.png"
                      />

                      <img
                        className="vector-19"
                        alt="Vector"
                        src="/img/vector-20.png"
                      />

                      <img
                        className="group-3"
                        alt="Group"
                        src="/img/group-1.png"
                      />

                      <img
                        className="group-4"
                        alt="Group"
                        src="/img/group-2.png"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <img className="vector-20" alt="Vector" src="/img/vector-2.png" />

              <img className="vector-21" alt="Vector" src="/img/vector-3.png" />

              <img className="group-5" alt="Group" src="/img/group-3.png" />

              <img className="group-6" alt="Group" src="/img/group-4.png" />
            </div>
          )}
        </div>
      )}

      {["eight", "five", "four", "seven", "six", "three"].includes(variant) && (
        <img
          className={`component-26 variant-9 variant-25-${variant} ${variantClassName}`}
          alt="Variant"
          src={
            variant === "four"
              ? img
              : variant === "five"
                ? variant4
                : variant === "six"
                  ? variant1
                  : variant === "seven"
                    ? variant5
                    : variant === "eight"
                      ? variant2
                      : variant3
          }
        />
      )}
    </>
  );
};

Component26.propTypes = {
  variant: PropTypes.oneOf([
    "seven",
    "two",
    "three",
    "four",
    "one",
    "five",
    "eight",
    "six",
  ]),
  img: PropTypes.string,
  variant1: PropTypes.string,
  variant2: PropTypes.string,
  variant3: PropTypes.string,
  variant4: PropTypes.string,
  variant5: PropTypes.string,
};
