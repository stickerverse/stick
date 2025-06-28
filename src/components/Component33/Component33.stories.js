import { Component33 } from ".";

export default {
  title: "Components/Component33",
  component: Component33,

  argTypes: {
    variant: {
      options: ["two", "one"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    text: "Orders",
    variant: "two",
    hover: true,
    className: {},
    component30Variant: "/img/component-2-5.png",
    component30Img: "/img/component-2-7.png",
  },
};
