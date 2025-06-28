import { Component21 } from ".";

export default {
  title: "Components/Component21",
  component: Component21,

  argTypes: {
    variant: {
      options: ["one"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    text: "Vinyl Stickers",
    variant: "one",
    hover: true,
    className: {},
    component18VariantClassName: {},
    component18Variant: "/img/component-1-44.png",
  },
};
