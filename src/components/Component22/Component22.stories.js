import { Component22 } from ".";

export default {
  title: "Components/Component22",
  component: Component22,

  argTypes: {
    variant: {
      options: ["two", "three", "one"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    text: "Order your stickers today →",
    variant: "two",
    hover: true,
    className: {},
    textClassName: {},
  },
};
