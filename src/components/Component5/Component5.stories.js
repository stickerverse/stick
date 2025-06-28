import { Component5 } from ".";

export default {
  title: "Components/Component5",
  component: Component5,

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
    className: {},
    textClassName: {},
  },
};
