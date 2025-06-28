import { Component25 } from ".";

export default {
  title: "Components/Component25",
  component: Component25,

  argTypes: {
    variant: {
      options: ["two", "one"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    text: "💸 Profit Margin Calculator",
    variant: "two",
    className: {},
  },
};
