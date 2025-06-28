import { Component39 } from ".";

export default {
  title: "Components/Component39",
  component: Component39,

  argTypes: {
    variant: {
      options: ["two", "one"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    text: " Deals",
    variant: "two",
    hover: true,
    className: {},
    textClassName: {},
  },
};
