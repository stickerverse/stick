import { Component9 } from ".";

export default {
  title: "Components/Component9",
  component: Component9,

  argTypes: {
    variant: {
      options: ["two", "three", "one"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    variant: "two",
    hover: true,
    className: {},
    component7Variant: "/img/component-1-23.png",
    component7Img: "/img/component-1-19.png",
    component7Variant1: "/img/component-1-21.png",
  },
};
