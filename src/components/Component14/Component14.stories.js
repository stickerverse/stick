import { Component14 } from ".";

export default {
  title: "Components/Component14",
  component: Component14,

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
    component13Variant: "/img/component-1-35.png",
    component13Img: "/img/component-1-31.png",
    component13Variant1: "/img/component-1-33.png",
  },
};
