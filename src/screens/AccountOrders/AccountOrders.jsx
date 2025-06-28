import React from "react";
import { Link } from "react-router-dom";
import { Component3 } from "../../components/Component3";
import { Component29 } from "../../components/Component29";
import { Component31 } from "../../components/Component31";
import { Component32 } from "../../components/Component32";
import { Component33 } from "../../components/Component33";
import { Component34 } from "../../components/Component34";
import { Component35 } from "../../components/Component35";
import { Component36 } from "../../components/Component36";
import { Component37 } from "../../components/Component37";
import { Component38 } from "../../components/Component38";
import { VariantWrapper } from "../../components/VariantWrapper";
import "./style.css";

export const AccountOrders = () => {
  return (
    <div className="account-orders">
      <div className="body-7">
        <div className="container-246">
          <div className="background-12">
            <header className="header-9">
              <div className="link-margin-16">
                <div className="link-8">
                  <Link className="sticker-shuttle-10" to="/home" />
                </div>
              </div>

              <div className="container-247">
                <Component29
                  className="component-132"
                  hover={false}
                  text=" Deals"
                  textClassName="component-133"
                  variant="one"
                />
                <Component29
                  className="component-132"
                  hover={false}
                  text="Start Your Order →"
                  textClassName="component-133"
                  to="/stickers"
                  variant="one"
                />
                <Component3
                  className="component-134"
                  hover={false}
                  text="Signup"
                  textClassName="component-133"
                  to="/login"
                  variant="three"
                />
                <div className="link-margin-17">
                  <Component31
                    className="component-135"
                    component30Variant="/img/component-2-12.png"
                    hover={false}
                    text={
                      <>
                        100
                        <br />
                        items
                      </>
                    }
                    variant="one"
                  />
                </div>
              </div>
            </header>
          </div>
        </div>

        <div className="main-9">
          <div className="container-248">
            <div className="container-249">
              <div className="container-250">
                <div className="text-wrapper-67">My Account</div>
              </div>
            </div>
          </div>

          <div className="container-251">
            <div className="container-252">
              <div className="container-253">
                <div className="container-254">
                  <div className="container-255">
                    <div className="container-256">
                      <p className="welcome-stephen">
                        <span className="text-wrapper-68">Welcome, </span>

                        <span className="text-wrapper-69">Stephen.</span>
                      </p>
                    </div>
                  </div>

                  <div className="container-257">
                    <Component32
                      className="component-136"
                      text="Homebase"
                      variant="one"
                      variantWrapperVariant="/img/component-4-4.png"
                    />
                    <Component33
                      className="component-136"
                      component30Variant="/img/component-2-13.png"
                      hover={false}
                      text="Orders"
                      variant="one"
                    />
                    <Component34
                      className="component-136"
                      text="Profile"
                      variant="one"
                      variantWrapperVariant="/img/component-4-5.png"
                    />
                    <Component35
                      className="component-136"
                      component30Variant="/img/component-2-14.png"
                      text="Logout"
                      variant="one"
                    />
                    <Component33
                      className="component-136"
                      component30Img="/img/component-2-15.png"
                      hover={false}
                      text="Custom Shop"
                      variant="two"
                    />
                  </div>

                  <div className="container-258">
                    <div className="margin-13">
                      <div className="div-11">
                        <div className="text-wrapper-70">Profile Card</div>
                      </div>
                    </div>

                    <div className="container-259">
                      <div className="component-9-wrapper">
                        <Component36
                          className="component-9-instance"
                          text="Update Profile"
                          variant="one"
                        />
                      </div>

                      <div className="link-margin-18">
                        <Component36
                          className="component-137"
                          text="Change my Password"
                          variant="one"
                        />
                      </div>
                    </div>

                    <div className="background-border-36">
                      <div className="margin-14">
                        <div className="container-260">
                          <div className="margin-15">
                            <div className="container-261">
                              <div className="container-262">
                                <VariantWrapper
                                  className="component-138"
                                  variant="three"
                                  variant2="/img/component-4-6.png"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="text-wrapper-71">
                            kirk11792@gmail.com
                          </div>
                        </div>
                      </div>

                      <div className="container-260">
                        <div className="margin-15">
                          <div className="container-261">
                            <div className="container-262">
                              <VariantWrapper
                                className="component-138"
                                variant="four"
                                variant3="/img/component-4-7.png"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="text-wrapper-72">
                          No Default Address
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="container-263">
                  <div className="container-264">
                    <div className="container-265">
                      <div className="container-256">
                        <div className="container-266">
                          <div className="text-wrapper-73">Your Last Order</div>
                        </div>
                      </div>
                    </div>

                    <div className="container-267">
                      <p className="text-wrapper-74">
                        You have not placed any orders.
                      </p>
                    </div>
                  </div>

                  <div className="container-268">
                    <div className="background-border-37">
                      <div className="margin-16">
                        <div className="container-267">
                          <div className="text-wrapper-75">Draft Orders</div>
                        </div>
                      </div>

                      <div className="table-wrapper">
                        <div className="table">
                          <p className="text-wrapper-76">
                            You have no Draft Orders
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-269">
          <footer className="footer-9">
            <div className="container-270">
              <div className="container-271">
                <div className="container-272">
                  <div className="div-11">
                    <div className="text-wrapper-77">Quick links 🔗</div>
                  </div>

                  <div className="list-20">
                    <div className="component-10-wrapper">
                      <Component37
                        className="component-10-instance"
                        text="🛸 Shipping Process"
                        to="/shippingfaqs"
                        variant="one"
                      />
                    </div>

                    <div className="item-32">
                      <Component37
                        className="component-139"
                        text="💸 Profit Margin Calculator"
                        variant="one"
                      />
                    </div>

                    <div className="item-32">
                      <Component37
                        className="component-139"
                        text="💫 QR Code Generator"
                        variant="one"
                      />
                    </div>

                    <div className="item-32">
                      <Component37
                        className="component-140"
                        text=" Blog Posts"
                        variant="one"
                      />
                    </div>

                    <div className="div-11">
                      <Component37
                        className="component-140"
                        text="💬 Contact Us"
                        variant="one"
                      />
                    </div>
                  </div>
                </div>

                <div className="container-273">
                  <div className="div-11">
                    <div className="text-wrapper-77">Info</div>
                  </div>

                  <div className="list-21">
                    <div className="component-10-wrapper">
                      <Component37
                        className="component-10-instance"
                        text="Terms of Service"
                        variant="one"
                      />
                    </div>

                    <div className="div-11">
                      <Component37
                        className="component-139"
                        text="Refund policy"
                        variant="one"
                      />
                    </div>
                  </div>
                </div>

                <div className="container-274">
                  <div className="div-11">
                    <div className="text-wrapper-77">Our mission 🚀</div>
                  </div>

                  <div className="div-11">
                    <p className="text-wrapper-78">
                      To empower individuals and businesses to express their
                      unique identity through exceptional custom stickers,
                      combining cutting-edge technology with personalized
                      service to transform ideas into lasting impressions that
                      stick.
                    </p>
                  </div>
                </div>

                <div className="container-275">
                  <div className="container-276">
                    <div className="sticker-society-PNG-9" />
                  </div>
                </div>

                <div className="container-277">
                  <div className="div-11">
                    <div className="strong-sticker-10">
                      © 2025 The Stickerverse
                    </div>
                  </div>
                </div>
              </div>

              <div className="container-278">
                <div className="list-22">
                  <div className="component-11-wrapper">
                    <Component38
                      className="component-11-instance"
                      component30Variant="/img/component-2-17.png"
                      component30VariantClassName="component-141"
                      hover={false}
                      variant="one"
                    />
                  </div>

                  <div className="component-11-wrapper">
                    <Component38
                      className="component-11-instance"
                      component30Img="/img/component-2-16.png"
                      component30VariantClassName="component-141"
                      hover={false}
                      variant="two"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="horizontal-border-9" />
          </footer>
        </div>
      </div>
    </div>
  );
};
