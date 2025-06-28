import React from "react";
import { Link } from "react-router-dom";
import { Component2 } from "../../components/Component2";
import { Component3 } from "../../components/Component3";
import { Component4 } from "../../components/Component4";
import { Component5 } from "../../components/Component5";
import { Component6 } from "../../components/Component6";
import { ConcreteComponentNode } from "../../components/ConcreteComponentNode";
import "./style.css";

export const Stickers = () => {
  return (
    <div className="stickers">
      <div className="body-2">
        <div className="overlap-group-4">
          <div className="image-fill-wrapper">
            <div className="component-1-wrapper">
              <ConcreteComponentNode
                variant="one"
                variantClassName="component-1-instance"
              />
            </div>
          </div>

          <div className="main-2">
            <div className="section-5" />

            <div className="div-wrapper-3">
              <div className="background-border-6">
                <div className="container-49">
                  <div className="div-wrapper-3">
                    <p className="all-orders-with-2">
                      <span className="text-wrapper-13">
                        🚀 All orders with{" "}
                      </span>

                      <span className="text-wrapper-14">
                        1,000+ stickers will be upgraded to Next-Day Air
                      </span>

                      <span className="text-wrapper-13">, on us.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="section-5" />

            <div className="div-wrapper-3">
              <div className="background-border-7">
                <img
                  className="image-border"
                  alt="Image border"
                  src="/img/image-border-7.png"
                />

                <div className="container-50">
                  <div className="container-51">
                    <div className="div-wrapper-3">
                      <div className="text-wrapper-15"> Vinyl Stickers</div>
                    </div>

                    <div className="div-wrapper-3">
                      <p className="text-wrapper-16">
                        Best for promotional use, retail, &amp; creative design.
                      </p>
                    </div>
                  </div>

                  <Component2
                    className="component-53"
                    hover={false}
                    linkPaintsClassName="component-54"
                    text="Go →"
                    variant="one"
                  />
                </div>
              </div>
            </div>

            <div className="section-5" />

            <div className="div-wrapper-3">
              <div className="background-border-8">
                <Link to="/holographic">
                  <img
                    className="image-border-2"
                    alt="Image border"
                    src="/img/image-border-8.png"
                  />
                </Link>

                <div className="container-50">
                  <div className="container-52">
                    <div className="div-wrapper-3">
                      <div className="text-wrapper-15">
                        💿 Holographic Stickers
                      </div>
                    </div>

                    <div className="div-wrapper-3">
                      <p className="text-wrapper-16">
                        Best for promotional use, retail, &amp; creative design.
                      </p>
                    </div>
                  </div>

                  <Component2
                    className="component-53"
                    hover={false}
                    linkPaintsClassName="component-55"
                    text="Go →"
                    to="/holographic"
                    variant="one"
                  />
                </div>
              </div>
            </div>

            <div className="section-5" />

            <div className="div-wrapper-3">
              <div className="background-border-9">
                <Link to="/matte">
                  <img
                    className="image-border-2"
                    alt="Image border"
                    src="/img/image-border-9.png"
                  />
                </Link>

                <div className="container-50">
                  <div className="container-51">
                    <div className="div-wrapper-3">
                      <div className="text-wrapper-15">Matte Stickers</div>
                    </div>

                    <div className="div-wrapper-3">
                      <p className="text-wrapper-17">
                        Zero-glare, matte stickers give a modern and
                        professional look.
                      </p>
                    </div>
                  </div>

                  <Component2
                    className="component-53"
                    hover={false}
                    text="Go →"
                    to="/matte"
                    variant="one"
                  />
                </div>
              </div>
            </div>

            <div className="section-5" />

            <div className="div-wrapper-3">
              <div className="background-border-8">
                <img
                  className="image-border"
                  alt="Image border"
                  src="/img/image-border-10.png"
                />

                <div className="container-50">
                  <div className="container-52">
                    <div className="div-wrapper-3">
                      <div className="text-wrapper-15">🤳 QR Code Stickers</div>
                    </div>

                    <div className="div-wrapper-3">
                      <p className="text-wrapper-16">
                        Best for service-based businesses and retention-focused
                        strategies.
                      </p>
                    </div>
                  </div>

                  <Component2
                    className="component-53"
                    hover={false}
                    text="Go →"
                    variant="one"
                  />
                </div>
              </div>
            </div>

            <div className="section-5" />

            <div className="div-wrapper-3">
              <div className="background-border-10">
                <img
                  className="image-border"
                  alt="Image border"
                  src="/img/image-border-11.png"
                />

                <div className="container-50">
                  <div className="container-52">
                    <div className="div-wrapper-3">
                      <div className="text-wrapper-15">✨ Clear Stickers</div>
                    </div>

                    <div className="div-wrapper-3">
                      <p className="text-wrapper-16">
                        Best for labels, window decals, and creative design.
                      </p>
                    </div>
                  </div>

                  <Component2
                    className="component-53"
                    hover={false}
                    text="Go →"
                    variant="one"
                  />
                </div>
              </div>
            </div>

            <div className="section-5" />

            <div className="div-wrapper-3">
              <div className="background-border-11">
                <Link to="/stickersheets">
                  <img
                    className="image-border-2"
                    alt="Image border"
                    src="/img/image-border-12.png"
                  />
                </Link>

                <div className="container-53">
                  <div className="container-51">
                    <div className="div-wrapper-3">
                      <div className="text-wrapper-15"> Sticker Sheets</div>
                    </div>

                    <div className="div-wrapper-3">
                      <p className="text-wrapper-16">
                        Best for events, fandom, &amp; creative design.
                      </p>
                    </div>
                  </div>

                  <Component2
                    className="component-53"
                    hover={false}
                    text="Go →"
                    to="/stickersheets"
                    variant="three"
                  />
                </div>
              </div>
            </div>

            <div className="section-5" />

            <div className="div-wrapper-3">
              <div className="background-border-11">
                <Link to="/textdecals">
                  <img
                    className="image-border-2"
                    alt="Image border"
                    src="/img/image-border-13.png"
                  />
                </Link>

                <div className="container-50">
                  <div className="container-51">
                    <div className="div-wrapper-3">
                      <div className="text-wrapper-15">
                        Text/Transfer Decals
                      </div>
                    </div>

                    <div className="div-wrapper-3">
                      <p className="text-wrapper-16">
                        Ideal for car windows, storefronts, laptops, or any
                        smooth surface.
                      </p>
                    </div>
                  </div>

                  <Component2
                    className="component-53"
                    hover={false}
                    text="Go →"
                    to="/textdecals"
                    variant="one"
                  />
                </div>
              </div>
            </div>

            <div className="section-6" />

            <div className="div-wrapper-3">
              <div className="container-54">
                <div className="container-55">
                  <div className="margin-8">
                    <div className="stickershuttle-3" />
                  </div>

                  <div className="margin-8">
                    <div className="box-png" />
                  </div>

                  <div className="margin-8">
                    <div className="stickershuttle-photo" />
                  </div>

                  <div className="margin-8">
                    <div className="small-png" />
                  </div>

                  <div className="margin-8">
                    <div className="halloween-set-jpg" />
                  </div>

                  <div className="margin-8">
                    <div className="sticker-sheets-are" />
                  </div>

                  <div className="margin-8">
                    <div className="blinker-fluid-jpg" />
                  </div>

                  <div className="margin-8">
                    <div className="stickershuttle-3" />
                  </div>

                  <div className="margin-8">
                    <div className="box-png" />
                  </div>

                  <div className="margin-8">
                    <div className="stickershuttle-photo" />
                  </div>

                  <div className="small-png-wrapper">
                    <div className="small-png-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container-56">
            <div className="background-3">
              <header className="header-2">
                <div className="link-wrapper">
                  <Link className="sticker-shuttle-wrapper" to="/home">
                    <div className="sticker-shuttle-2" />
                  </Link>
                </div>

                <div className="container-57">
                  <Component5
                    className="component-56"
                    text=" Deals"
                    textClassName="component-57"
                    variant="one"
                  />
                  <Component5
                    className="component-56"
                    text="Start Your Order →"
                    textClassName="component-57"
                    variant="one"
                  />
                  <Component5
                    className="component-56"
                    text="Log in"
                    textClassName="component-57"
                    variant="one"
                  />
                  <Component3
                    className="component-58"
                    hover={false}
                    text="Signup"
                    textClassName="component-57"
                    to="/login"
                    variant="three"
                  />
                  <div className="link-margin-3">
                    <Component4
                      className="component-59"
                      concreteComponentNodeVariant="/img/component-1-17.png"
                      hover={false}
                      to="/cart"
                      variant="three"
                    />
                  </div>
                </div>
              </header>
            </div>
          </div>
        </div>

        <div className="footer-wrapper">
          <footer className="footer-2">
            <div className="container-58">
              <div className="container-59">
                <div className="container-60">
                  <div className="div-3">
                    <div className="text-wrapper-18">Quick links 🔗</div>
                  </div>

                  <div className="list-3">
                    <div className="component-3-wrapper">
                      <Component6
                        className="component-53"
                        text="🛸 Shipping Process"
                        textClassName="component-57"
                        variant="one"
                      />
                    </div>

                    <div className="item-4">
                      <Component6
                        className="component-3-instance"
                        text="💸 Profit Margin Calculator"
                        textClassName="component-57"
                        variant="one"
                      />
                    </div>

                    <div className="item-4">
                      <Component6
                        className="component-3-instance"
                        text="💫 QR Code Generator"
                        textClassName="component-57"
                        variant="one"
                      />
                    </div>

                    <div className="item-4">
                      <Component6
                        className="component-3-instance"
                        text=" Blog Posts"
                        textClassName="component-57"
                        variant="one"
                      />
                    </div>

                    <div className="div-3">
                      <Component6
                        className="component-3-instance"
                        text="💬 Contact Us"
                        textClassName="component-57"
                        variant="one"
                      />
                    </div>
                  </div>
                </div>

                <div className="container-61">
                  <div className="div-3">
                    <div className="text-wrapper-18">Info</div>
                  </div>

                  <div className="list-4">
                    <div className="component-3-wrapper">
                      <Component6
                        className="component-53"
                        text="Terms of Service"
                        variant="one"
                      />
                    </div>

                    <div className="div-3">
                      <Component6
                        className="component-3-instance"
                        text="Refund policy"
                        variant="one"
                      />
                    </div>
                  </div>
                </div>

                <div className="container-62">
                  <div className="div-3">
                    <div className="text-wrapper-18">Our mission 🚀</div>
                  </div>

                  <div className="div-3">
                    <p className="text-wrapper-19">
                      To empower individuals and businesses to express their
                      unique identity through exceptional custom stickers,
                      combining cutting-edge technology with personalized
                      service to transform ideas into lasting impressions that
                      stick.
                    </p>
                  </div>
                </div>

                <div className="container-63">
                  <div className="container-64">
                    <div className="sticker-society-PNG-2" />
                  </div>
                </div>

                <div className="container-65">
                  <div className="div-3">
                    <div className="strong-sticker-2">
                      © 2025 The Stickerverse
                    </div>
                  </div>
                </div>
              </div>

              <div className="container-66">
                <div className="list-5">
                  <div className="item-5">
                    <Component4
                      className="component-60"
                      concreteComponentNodeImg="/img/component-1-15.png"
                      hover={false}
                      variant="one"
                    />
                  </div>

                  <div className="item-5">
                    <Component4
                      className="component-60"
                      concreteComponentNodeVariant1="/img/component-1-16.png"
                      hover={false}
                      variant="two"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="horizontal-border-2" />
          </footer>
        </div>
      </div>
    </div>
  );
};
