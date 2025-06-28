import { Component12 } from ".";

export default {
  title: "Components/Component12",
  component: Component12,

  argTypes: {
    variant: {
      options: ["two", "three", "one"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    text: "Forgot your password?",
    variant: "two",
    hover: true,
    className: {},
    textClassName: {},
  },
};
