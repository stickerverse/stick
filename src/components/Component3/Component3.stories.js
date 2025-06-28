import { Component3 } from ".";

export default {
  title: "Components/Component3",
  component: Component3,

  argTypes: {
    variant: {
      options: ["two", "three", "one"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    text: "Log in",
    variant: "two",
    hover: true,
    className: {},
    textClassName: {},
  },
};
