import { Component8 } from ".";

export default {
  title: "Components/Component8",
  component: Component8,

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
