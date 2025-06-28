import React from "react";
import { Link } from "react-router-dom";
import { Component3 } from "../../components/Component3";
import { Component12 } from "../../components/Component12";
import { Component14 } from "../../components/Component14";
import { Component15 } from "../../components/Component15";
import { Component16 } from "../../components/Component16";
import "./style.css";

export const Login = () => {
  return (
    <div className="login">
      <div className="container-118">
        <div className="background-7">
          <header className="header-5">
            <div className="link-margin-8">
              <Link className="link-4" to="/home">
                <Link className="sticker-shuttle-5" to="/home" />
              </Link>
            </div>

            <div className="container-119">
              <Component12
                className="component-83"
                hover={false}
                text=" Deals"
                textClassName="component-84"
                variant="two"
              />
              <Component12
                className="component-83"
                hover={false}
                text="Start Your Order →"
                textClassName="component-84"
                to="/stickers"
                variant="two"
              />
              <Component12
                className="component-83"
                hover={false}
                text="Log in"
                textClassName="component-84"
                variant="two"
              />
              <Component3
                className="component-85"
                hover={false}
                text="Signup"
                textClassName="component-84"
                variant="three"
              />
              <div className="link-margin-9">
                <Component14
                  className="component-86"
                  component13Variant="/img/component-1-17.png"
                  hover={false}
                  to="/cart"
                  variant="three"
                />
              </div>
            </div>
          </header>
        </div>
      </div>

      <div className="main-5">
        <div className="container-120">
          <div className="heading-5">
            <div className="text-wrapper-35">Login</div>
          </div>

          <div className="form">
            <Component12
              className="component-87"
              hover={false}
              text="Forgot your password?"
              textClassName="component-84"
              variant="one"
            />
            <Component12
              className="component-88"
              hover={false}
              text="Create account"
              textClassName="component-84"
              variant="one"
            />
            <div className="container-121">
              <div className="overlay-shadow-9" />

              <div className="input" />

              <div className="label">
                <div className="text-wrapper-36">Email</div>
              </div>
            </div>

            <div className="container-122">
              <div className="overlay-shadow-9" />

              <div className="input" />

              <div className="label">
                <div className="text-wrapper-36">Password</div>
              </div>
            </div>

            <Component15
              buttonPaintsClassName="component-90"
              className="component-89"
              hover={false}
              overlayShadowClassName="component-91"
              text="Sign in"
              textClassName="component-84"
              variant="one"
            />
          </div>
        </div>
      </div>

      <div className="container-123">
        <footer className="footer-5">
          <div className="container-124">
            <div className="container-125">
              <div className="container-126">
                <div className="div-6">
                  <div className="text-wrapper-37">Quick links 🔗</div>
                </div>

                <div className="list-10">
                  <div className="item-15">
                    <Component16
                      className="component-92"
                      text="🛸 Shipping Process"
                      to="/shippingfaqs"
                      variant="one"
                    />
                  </div>

                  <div className="item-16">
                    <Component16
                      className="component-93"
                      text="💸 Profit Margin Calculator"
                      variant="one"
                    />
                  </div>

                  <div className="item-16">
                    <Component16
                      className="component-93"
                      text="💫 QR Code Generator"
                      variant="one"
                    />
                  </div>

                  <div className="item-16">
                    <Component16
                      className="component-93"
                      text=" Blog Posts"
                      variant="one"
                    />
                  </div>

                  <div className="div-6">
                    <Component16
                      className="component-93"
                      text="💬 Contact Us"
                      variant="one"
                    />
                  </div>
                </div>
              </div>

              <div className="container-127">
                <div className="div-6">
                  <div className="text-wrapper-37">Info</div>
                </div>

                <div className="div-6">
                  <div className="item-15">
                    <Component16
                      className="component-92"
                      text="Terms of Service"
                      variant="one"
                    />
                  </div>

                  <div className="item-17">
                    <Component16
                      className="component-93"
                      text="Refund policy"
                      variant="one"
                    />
                  </div>
                </div>
              </div>

              <div className="container-128">
                <div className="div-6">
                  <div className="text-wrapper-37">Our mission 🚀</div>
                </div>

                <div className="div-6">
                  <p className="text-wrapper-38">
                    To empower individuals and businesses to express their
                    unique identity through exceptional custom stickers,
                    combining cutting-edge technology with personalized service
                    to transform ideas into lasting impressions that stick.
                  </p>
                </div>
              </div>

              <div className="container-129">
                <div className="container-130">
                  <div className="sticker-society-PNG-5" />
                </div>
              </div>

              <div className="container-131">
                <div className="div-6">
                  <div className="strong-sticker-5">
                    © 2025 The Stickerverse
                  </div>
                </div>
              </div>
            </div>

            <div className="container-132">
              <div className="list-11">
                <div className="item-18">
                  <Component14
                    className="component-94"
                    component13Img="/img/component-1-37.png"
                    hover={false}
                    variant="one"
                  />
                </div>

                <div className="item-18">
                  <Component14
                    className="component-94"
                    component13Variant1="/img/component-1-38.png"
                    hover={false}
                    variant="two"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="horizontal-border-5" />
        </footer>
      </div>
    </div>
  );
};
