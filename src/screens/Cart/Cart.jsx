import React from "react";
import { Link } from "react-router-dom";
import { Component3 } from "../../components/Component3";
import { Component9 } from "../../components/Component9";
import { Component10 } from "../../components/Component10";
import { Component11 } from "../../components/Component11";
import "./style.css";

export const Cart = () => {
  return (
    <Link className="cart" to="/checkout">
      <div className="container-67">
        <div className="background-4">
          <header className="header-3">
            <div className="link-margin-4">
              <Link className="link-2" to="/home">
                <Link className="sticker-shuttle-3" to="/home" />
              </Link>
            </div>

            <div className="nav-margin-2" />

            <div className="container-68">
              <Component3
                className="component-61"
                hover={false}
                text=" Deals"
                textClassName="component-62"
                variant="two"
              />
              <Component3
                className="component-61"
                hover={false}
                text="Start Your Order →"
                textClassName="component-62"
                to="/stickers"
                variant="two"
              />
              <Component3
                className="component-61"
                hover={false}
                text="Log in"
                textClassName="component-62"
                to="/login"
                variant="two"
              />
              <Component3
                className="component-63"
                hover={false}
                text="Signup"
                textClassName="component-62"
                to="/login"
                variant="three"
              />
              <div className="link-margin-5">
                <Component9
                  className="component-64"
                  component7Variant="/img/component-1-24.png"
                  hover={false}
                  variant="three"
                />
              </div>
            </div>
          </header>
        </div>
      </div>

      <div className="main-3">
        <div className="div-wrapper-4">
          <div className="background-border-12">
            <div className="container-69">
              <div className="div-wrapper-4">
                <p className="enter-all-coupon">
                  ✨ Enter all coupon codes at &#39;checkout&#39; ✨
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="div-wrapper-4">
          <div className="cart-items">
            <div className="container-70">
              <div className="heading-2">
                <p className="text-wrapper-20">Your cart is empty 💌</p>
              </div>

              <div className="heading-3">
                <div className="text-wrapper-21">Have an account?</div>
              </div>

              <div className="container-71">
                <Component3
                  className="component-65"
                  hover={false}
                  text="Log in"
                  textClassName="component-62"
                  to1="/login"
                  variant="one"
                />
                <p className="to-check-out-faster"> to check out faster.</p>
              </div>

              <Component10
                className="component-66"
                hover={false}
                linkPaintsClassName="component-67"
                text="Continue shopping"
                textClassName="component-68"
                to="/stickers"
                variant="one"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container-72">
        <footer className="footer-3">
          <div className="container-73">
            <div className="container-74">
              <div className="container-75">
                <div className="div-4">
                  <div className="text-wrapper-22">Quick links 🔗</div>
                </div>

                <div className="list-6">
                  <div className="item-6">
                    <Component11
                      className="component-69"
                      text="🛸 Shipping Process"
                      to="/shippingfaqs"
                      variant="one"
                    />
                  </div>

                  <div className="item-7">
                    <Component11
                      className="component-70"
                      text="💸 Profit Margin Calculator"
                      variant="one"
                    />
                  </div>

                  <div className="item-7">
                    <Component11
                      className="component-70"
                      text="💫 QR Code Generator"
                      variant="one"
                    />
                  </div>

                  <div className="item-7">
                    <Component11
                      className="component-70"
                      text=" Blog Posts"
                      variant="one"
                    />
                  </div>

                  <div className="div-4">
                    <Component11
                      className="component-70"
                      text="💬 Contact Us"
                      variant="one"
                    />
                  </div>
                </div>
              </div>

              <div className="container-76">
                <div className="div-4">
                  <div className="text-wrapper-22">Info</div>
                </div>

                <div className="div-4">
                  <div className="item-6">
                    <Component11
                      className="component-69"
                      text="Terms of Service"
                      variant="one"
                    />
                  </div>

                  <div className="item-8">
                    <Component11
                      className="component-70"
                      text="Refund policy"
                      variant="one"
                    />
                  </div>
                </div>
              </div>

              <div className="container-77">
                <div className="div-4">
                  <div className="text-wrapper-22">Our mission 🚀</div>
                </div>

                <div className="div-4">
                  <p className="text-wrapper-23">
                    To empower individuals and businesses to express their
                    unique identity through exceptional custom stickers,
                    combining cutting-edge technology with personalized service
                    to transform ideas into lasting impressions that stick.
                  </p>
                </div>
              </div>

              <div className="container-78">
                <div className="container-79">
                  <div className="sticker-society-PNG-3" />
                </div>
              </div>

              <div className="container-80">
                <div className="div-4">
                  <div className="strong-sticker-3">
                    © 2025 The Stickerverse
                  </div>
                </div>
              </div>
            </div>

            <div className="container-81">
              <div className="list-7">
                <div className="item-9">
                  <Component9
                    className="component-71"
                    component7Img="/img/component-1-26.png"
                    hover={false}
                    variant="one"
                  />
                </div>

                <div className="item-9">
                  <Component9
                    className="component-71"
                    component7Variant1="/img/component-1-25.png"
                    hover={false}
                    variant="two"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="horizontal-border-3" />
        </footer>
      </div>
    </Link>
  );
};
