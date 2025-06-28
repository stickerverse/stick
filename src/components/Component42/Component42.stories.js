import { Component42 } from ".";

export default {
  title: "Components/Component42",
  component: Component42,

  argTypes: {
    variant: {
      options: ["two", "three", "one"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    text: "Homebase",
    variant: "two",
    hover: true,
    className: {},
    imgWrapperVariant: "/img/component-4-8.png",
    component40Variant: "/img/component-2-22.png",
    component40Img: "/img/component-2-24.png",
  },
};
